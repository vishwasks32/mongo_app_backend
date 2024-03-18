const multer = require("multer");

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,"./uploads");
    },
    filename:(req,file,callback)=>{
        callback(null,`image-${Date.now()}.${file.originalname}`);
    }
})

const fileFilter = (req,file,callback)=>{
    if(file.mimetype==="image/png"||file.mimetype==="image/jpg"||file.mimetype==="image/jpeg"){
        callback(null,true);
    }
    else{
        callback(null,false);
        callback(new Error("allowed images only"))
    }
}

const upload = multer({
    storage:storage,
    fileFilter:fileFilter
})

module.exports = upload;