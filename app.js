const express = require('express');
const db = require('./src/db/connection');
const userRouter = require('./src/routes/userRouter');

const app = express();
const PORT=process.env.PORT||4000;

app.use(userRouter);
app.use(express.json());



app.listen(PORT,()=>{
    console.log(`server listening on port: ${PORT}`);
})