const express= require("express")
const mongoose = require("mongoose")
//require('mongoose-double')(mongoose);
// var mySchema = new schema({ double: SchemaTypes.Double });
const router = express.Router()
const empMod = mongoose.model("Employee")



router.get("/list",(req,res)=>{
    empMod.find((err,result)=>{
        if(!err){
            console.log(result);
            res.render("list",{ data : result });
        }else{
            //res.send("Error");
        }
    });  
})

module.exports = router;