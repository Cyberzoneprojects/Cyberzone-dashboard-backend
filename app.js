const express = require('express');
require('dotenv').config();

const mongoose = require('mongoose');
// import Router
// const userRoutes = require('./routes/modul');
const modulRoute = require('./routes/modul');
const servicesRoute = require('./routes/services.route')
const resourceRoute = require('./routes/resource.route');
const unitRoutes = require('./routes/units.routes');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// const multer  = require('multer')
// const 
// appp
const app = express()

// db
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    // useCreateIndex: true,
}).then(()=> console.log('DB connected'))



// setup multer for file upload
// var storage = multer.diskStorage(
//     {
//         destination: '../../',
//         filename: function (req, file, cb ) {
//             cb( null, file.originalname);
//         }
//     }
// );
// const upload = multer({ storage: storage } )
// app.use(express.json());
// // serving front end build files
// app.use(express.static(__dirname + "/../build"));

// // route for file upload
// app.post("/api/uploadfile", upload.single('myFile'), (req, res, next) => {
//     console.log(req.file.originalname + " file successfully uploaded !!");
//     res.sendStatus(200);
// });



// middlewares

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())



const cors=require("cors");


app.use(cors())
// routes middleware
// app.use('/api', userRoutes); 

app.use('/api', modulRoute); 
app.use('/api', servicesRoute);
app.use('/api', resourceRoute);
app.use('/api', unitRoutes);


const port = process.env.PORT||8000

app.listen(port, ()=>{
    console.log(`Server running at ${port}`)
})



// Setup for starting the mongod service

// sudo mkdir /var/lib/mongodb
// sudo mkdir /var/log/mongodb
//  sudo chown -R mongodb:mongodb /var/lib/mongodb
// sudo chown -R mongodb:mongodb /var/log/mongodb
