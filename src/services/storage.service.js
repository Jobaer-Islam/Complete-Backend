const ImageKit = require('@imagekit/nodejs');

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile(buffer) {
    console.log(buffer);
    console.log("--- KEY CHECK ---");
    console.log("Public Key:", process.env.IMAGEKIT_PUBLIC_KEY);
    // (Don't log your private key fully, just check if it exists)
    console.log("Has Private Key?", !!process.env.IMAGEKIT_PRIVATE_KEY);

    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "IMG_4371.HEIC"

    })
    return result;

    
    
}

module.exports = uploadFile;
