const User = require("../models/userSchema");
exports.getUsers = (req,res)=>{
    res.send("This is demo users");
}

//user registrtion
exports.registerUser = async (req,res)=>{
    console.log(req.file);
    console.log(req.body);
    const file = req.file.filename;
    const {user_name,password,email_id} = req.body;

    if(!user_name||!email_id||!password||!file){
        res.status(400)
        res.send("Please fill all fields");
    }

    
    const userExist = await User.findOne({email_id:email_id});
    if(userExist){
        res.status(400)
        res.send("User exists");
    }
    try{
        const newUser = new User({user_name,email_id,password,img:file});
        const userSave = await newUser.save();
        res.status(200);
        res.send(userSave);
    }catch(error){
        console.log(error);
    }
}