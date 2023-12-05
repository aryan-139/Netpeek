const Express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan=require('morgan');
const helmet=require('helmet');
const NetworkSpeed = require('network-speed');
const ip=require('ip');
const ping=require('ping');



const app = new Express();

app.use(cors());

const deviceIp=ip.address();
//console.log(deviceIp);
const testNetworkSpeed = new NetworkSpeed();

getNetworkDownloadSpeed();
async function getNetworkDownloadSpeed() {
    const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
    const fileSizeInBytes = 500000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    return speed;
}
getNetworkUploadSpeed();

async function getNetworkUploadSpeed() {
    const options = {
      hostname: 'www.google.com',
      port: 80,
      path: '/catchers/544b09b4599c1d0200000289',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const fileSizeInBytes = 2000000
    const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
    return speed;
  }

const PORT=8001;
const uploadSpeedInstance = [];
const downloadSpeedInstance = [];

// get last 5 speed instances for the graphs
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

          const uploadSpeedResult = await uploadSpeedPromise;
          const downloadSpeedResult = await downloadSpeedPromise;

          uploadSpeedInstance.push(uploadSpeedResult.mbps);
          downloadSpeedInstance.push(downloadSpeedResult.mbps);

          i++;
        } catch (error) {
          console.error('Error fetching speed:', error);
        }
      }
    }, 1000);
  });
}



app.get('/speed', async (req, res) => {
  try {
    await getLastTenSpeedInstance();
    const [uploadSpeed, downloadSpeed] = await Promise.all([
      getNetworkUploadSpeed(),
      getNetworkDownloadSpeed(),
    ]);

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
      // Handle or log the error as needed
      res.status(500).json({ error: 'Connection reset by peer' });
    } else {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
});




app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});