const express = require('express');
require('dotenv').config();
const authRoutes = require("./routes/AuthRoutes");
const cookieParser = require("cookie-parser");


const mongoose = require('mongoose');
// import Router
const userRoutes = require('./routes/modul');
const modulRoute = require('./routes/modul');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// const 
// appp
const app = express()

// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('DB connected');
}).catch(err=>{
    console.log(err.message);
})

// middlewares

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())



const cors=require("cors");


// app.use(cors())
// routes middleware
app.use('/api', userRoutes); 

app.use('/api', modulRoute); 

const port = process.env.PORT||8000

app.listen(port, ()=>{
    console.log(`Server running at ${port}`)
})

app.use(
    cors({
        origin: ["http://localhost:3001"],
        method: ["GET","POST"],
        credentials: true,
    })
);

app.use(cookieParser());

app.use(express.json());
app.use("/", authRoutes);

// Setup for starting the mongod service

// sudo mkdir /var/lib/mongodb
// sudo mkdir /var/log/mongodb
//  sudo chown -R mongodb:mongodb /var/lib/mongodb
// sudo chown -R mongodb:mongodb /var/log/mongodb