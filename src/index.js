// require('dotenv').config({path: './env'})
import express from 'express';
import dotenv from 'dotenv'
import connectDB from "./db/index.js";

const app = express()

dotenv.config({
    path: './env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is listening at ${process.env.PORT}`)
    })
    app.on("error",(error)=>{
        console.log("ERORR: ",error);
        throw error
    });
})
.catch((err)=>{
    console.log("mongo DB connection failed!!", err);
})

// import express from 'express';
// const app = express();

// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//         app.on("error",(error)=>{
//             console.log("ERRR: ",error);
//             throw error
//         });

//         app.listen(process.env.PORT,()=>{
//             console.log(`Server is listening at port ${process.env.PORT}`);
//         })
//     }
//     catch (error){
//         console.error("ERROR: ",error)
//         throw error
//     }
// })()