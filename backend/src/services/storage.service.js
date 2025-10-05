const imagekit = require('imagekit');
const dotenv = require('dotenv');

dotenv.config();

const imagekitClient = new imagekit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

async function uploadFile(file, fileName){
    const result = await imagekitClient.upload({
        file: file.buffer,
        fileName: fileName,
    });
    return result;
}

module.exports = {
    uploadFile
};
