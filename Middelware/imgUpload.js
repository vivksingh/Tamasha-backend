const multer = require('multer');
const path = require('path');


// multer storage engine
const storage = multer.diskStorage({
    destination : './uploads/',
    filename : function(req, file, cb){
        cb(null, Date.now() + '-' + file.originalname);
    }
});

// config upload init
const upload = multer({
    storage : storage,
    limits : { fileSize : 10 * 1024 * 1024 },
    fileFilter : function(req, file, cb){
        const fileTypes = /jpeg|jpg|png|gif/;
        const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
        const mimeType = fileTypes.test(file.mimetype);

        if(extName && mimeType){
            cb(null, true);
        }else{
            cb('Error, Invalid image type')
        }
    }
}).single('image');


module.exports = upload;