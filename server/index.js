// app.js
const Express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getNetworkDownloadSpeed, getNetworkUploadSpeed } = require('./routes/networkSpeed');
const { uploadSpeedInstance, downloadSpeedInstance, updateSpeedInstances } = require('./routes/speedInstance');

const app = new Express();

app.use(cors());

const PORT = 8001;

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

        const speed = {
            uploadSpeed: uploadSpeed.mbps,
            downloadSpeed: downloadSpeed.mbps,
            sessionData: 550,
            nearestServer: 'Kolkata, India',
            currentISP: 'Bharti Airtel',
            sessionStatus: 'Inactive',
            uploadSpeedInstance,
            downloadSpeedInstance,
        };

        console.log(speed);
        res.json(speed);
    } catch (err) {
        if (err.code === 'ECONNRESET') {
            console.error('Connection reset by peer');
            res.status(500).json({ error: 'Connection reset by peer' });
        } else {
            console.log(err);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
