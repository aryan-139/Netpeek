// app.js
const Express = require('express');
const os=require('os');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getNetworkDownloadSpeed, getNetworkUploadSpeed } = require('./routes/networkSpeed');
const { uploadSpeedInstance, downloadSpeedInstance, updateSpeedInstances} = require('./routes/speedInstance');

const app = new Express();

app.use(cors());
app.use(bodyParser.json());
const PORT = 8001;
const networkInterfaces = os.networkInterfaces();

//server uptime 
console.log(os.uptime());
//console.log('CPU Usage:', os.cpus());
console.log('Total Memory:', os.totalmem());
console.log('Free Memory:', os.freemem());

async function getLastTenSpeedInstance() {
    let i = 0;

    return new Promise((resolve) => {
        const interval = setInterval(async () => {
            if (i === 5) {
                console.log(uploadSpeedInstance);
                console.log(downloadSpeedInstance);
                clearInterval(interval);
                resolve(); // Resolve the promise after 5 iterations
            } else {
                try {
                    const uploadSpeedPromise = getNetworkUploadSpeed();
                    const downloadSpeedPromise = getNetworkDownloadSpeed();

                    const [uploadSpeedResult, downloadSpeedResult] = await Promise.all([uploadSpeedPromise, downloadSpeedPromise]);

                    updateSpeedInstances(uploadSpeedResult.mbps, downloadSpeedResult.mbps);

                    i++;
                } catch (error) {
                    console.error('Error fetching speed:', error);
                }
            }
        }, 1000);
    });
}

app.get('/speed', async (req, res) => {
    console.log('Speed request received');
    try {
        await getLastTenSpeedInstance();
        const [uploadSpeed, downloadSpeed] = await Promise.all([getNetworkUploadSpeed(), getNetworkDownloadSpeed()]);

        const meanUploadSpeed = uploadSpeedInstance.reduce((a, b) => a + b, 0) / uploadSpeedInstance.length;
        const meanDownloadSpeed = downloadSpeedInstance.reduce((a, b) => a + b, 0) / downloadSpeedInstance.length;

        const speed = {
            uploadSpeed: uploadSpeed.mbps,
            downloadSpeed: downloadSpeed.mbps,
            sessionData: 550,
            nearestServer: 'Kolkata, India',
            currentISP: 'Bharti Airtel',
            sessionStatus: 'Active',
            uploadSpeedInstance,
            downloadSpeedInstance,
            meanUploadSpeed,
            meanDownloadSpeed,
        };

        console.log(speed);
        res.json(speed);
    } catch (err) {
        if (err.code === 'ECONNRESET' || err.code === 'ENOTFOUND') {
            //console.error('Connection reset by peer');
            res.status(500).json({ error: 'bad connection' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
