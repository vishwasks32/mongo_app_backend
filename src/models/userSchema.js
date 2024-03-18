const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    user_name: {
        type:String,
        required: true
    },
    email_id: {
        type:String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    img:{
        type:String,
        required: true
    }
})

const User = mongoose.model("User", schema);
module.exports = User;