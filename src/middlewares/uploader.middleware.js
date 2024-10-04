const fs = require('fs');
const path = require('path');

const multer = require("multer");
const createHttpError = require('http-errors');

// Function to ensure that the directory exists
const ensureDirectoryExistence = (dir) => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
};

// Function to dynamically create a multer instance with a custom destination
const uploadMiddleware = (destinationPath) => {
    // multer storage configuration
    const storage = multer.diskStorage({
        destination: (req, file, cb) => {
            const uploadPath = path.join(__dirname, "../../public/uploads", destinationPath);
            // Ensure the directory exists
            ensureDirectoryExistence(uploadPath);
            // Set the destination path
            cb(null, uploadPath);
        },
        filename: (req, file, cb) => {
            const unique = Date.now() + "-" + Math.round(Math.random() * 1E9);
            const ext = path.extname(file.originalname);
            cb(null, `${unique}${ext}`);
        }
    })
    // File filter to allow only certain file types
    const fileFilter = (req, file, cb) => {
        const ext = path.extname(file.originalname);
        const types = ['.png', '.jpg', '.jpeg', '.svg'];
        if (types.includes(ext)) {
            return cb(null, true);
        };
        return cb(createHttpError.BadRequest("فرمت عکس مجاز نمی باشد"));
    }
    
    const pictureMaxSize = 5 * 1024 * 1024; // 5MB limit max size
    
    return multer({
        storage,
        limits: { fileSize: pictureMaxSize },
        fileFilter
    });
};

module.exports = {
    uploadMiddleware
}