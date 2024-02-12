import express from 'express';
import mongoose from 'mongoose';
import userRouterr from './Routes/userRoutes.js';
import dotenv from 'dotenv'
import authRouterr from './Routes/authRoutes.js';
import listingRouter from './Routes/propertyListingRoutes.js';
import ErrorHandler from './middlewares/errorHandler.js';
dotenv.config();
import cors from 'cors';
import adminRouter from './Routes/AdminRoutes.js';
import chatRouter from './Routes/chatRoutes.js';
// import{ Server} from "socket.io";
// import http from "http";
import couponRouter from './Routes/couponRoutes.js';
import ContactUSRouter from './Routes/ContactUsRoutes.js';
import path from 'path';

const app= express();
app.use(cors());


mongoose.connect(process.env.MONGO_DB)
.then(()=>{
    console.log('connected to mongodb');
})
.catch((err)=>{
    console.log(err);
})
const __dirname = path.resolve();

app.use(express.json());
app.use('/api/user',userRouterr);
app.use('/api/auth',authRouterr);
app.use('/api/list',listingRouter);
app.use('/api/admin',adminRouter);
app.use('/api/chat',chatRouter);
app.use('/api/coupon',couponRouter);
app.use('/api/contact',ContactUSRouter)


app.use(ErrorHandler);

app.listen(3000,()=>{
    console.log('listening on port 3000');
})