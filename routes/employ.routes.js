const express = require('express');
const router= express.Router();



router.get('/',(req,res)=>{
    res.send("employee route created")
})


module.exports=router;