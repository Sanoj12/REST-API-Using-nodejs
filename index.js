const express=require('express');
const mongoose=require('mongoose');
const app = express();
const empRouter=require('./routes/employ.routes');


app.use('/employ',empRouter)       ///middleware 


mongoose.connect('mongodb+srv://sanoj:79BdYUFFRIzILyZu@cluster0.8ozog19.mongodb.net/employee_db?retryWrites=true&w=majority')
.then((res)=>{
    console.log("database connected succesfully!...");

}).catch((err)=>{
    console.log("error detected while connection DB:" +err);
})

app.listen(5000,()=>{
    console.log("server running of PORT 5000");
})