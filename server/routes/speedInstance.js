// speedInstance.js
const uploadSpeedInstance = [];
const downloadSpeedInstance = [];

function updateSpeedInstances(uploadSpeed, downloadSpeed) {
    if (uploadSpeedInstance.length >= 5) {
        uploadSpeedInstance.shift();
    }
    if (downloadSpeedInstance.length >= 5) {
        downloadSpeedInstance.shift();
    }

    uploadSpeedInstance.push(uploadSpeed);
    downloadSpeedInstance.push(downloadSpeed);
}




module.exports = { uploadSpeedInstance, downloadSpeedInstance, updateSpeedInstances };
