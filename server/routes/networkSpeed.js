// networkSpeed.js
const NetworkSpeed = require('network-speed');

const testNetworkSpeed = new NetworkSpeed();

async function getNetworkDownloadSpeed() {
    try {
    const baseUrl = 'https://eu.httpbin.org/stream-bytes/500000';
    const fileSizeInBytes = 500000;
    const speed = await testNetworkSpeed.checkDownloadSpeed(baseUrl, fileSizeInBytes);
    return speed;
    } catch (error) {
        console.error('Error fetching download speed:', error);
        throw new Error('BAD_CONNECTION');
    }
    
}

async function getNetworkUploadSpeed() {
    try {
        const options = {
            hostname: 'www.google.com',
            port: 80,
            path: '/catchers/544b09b4599c1d0200000289',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };
        const fileSizeInBytes = 2000000;
        const speed = await testNetworkSpeed.checkUploadSpeed(options, fileSizeInBytes);
        return speed;
        
    } catch (error) {
        console.error('Error fetching download speed:', error);
        throw new Error('BAD_CONNECTION');
    }
    
}

module.exports = { getNetworkDownloadSpeed, getNetworkUploadSpeed };
