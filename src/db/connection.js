const mongoose = require('mongoose');
const URI=process.env.DB_URI||"mongodb://127.0.0.1:27017/addressbook";
console.log(URI);
const db = mongoose.connect(URI)
.then(()=>{
    console.log("Connected Successfully...");
}).catch((e)=>{
    console.log(e);
})

module.exports = db;


