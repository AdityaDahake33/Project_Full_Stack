const ImageKit = require("imagekit");

let imagekit;

function getImageKitInstance() {
    if (!imagekit) {
        imagekit = new ImageKit({
            publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
            urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
        });
    }
    return imagekit;
}

async function uploadFile(file, filename){
    const result = await getImageKitInstance().upload({
        file: file,
        fileName : filename, // Corrected to 'filename'
    })

    return result;
}

module.exports = {
    uploadFile
}