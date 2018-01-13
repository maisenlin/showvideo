var path = require("path");  
var express = require("express");  
var router = express.Router();  
  

var index = function(req,res){
    //res.sendFile(path.join(__dirname,"upload.html"));  
    res.sendFile(path.join(__dirname,"../public/index.html"));
}
router.get("/", index);  
router.get("/index", index);
  
router.get("/user",function(req,res){  
    res.send("index user page" + req.url);  
});  
  
router.get("/admin",function(req,res){  
    res.send("admin page" + req.url);  
});  
  
router.get("/redirect",function(req,res){  
    res.redirect("https://www.baidu.com");  
});  
  
router.get("/upload",function(req,res){  
  // res.send(path.join(__dirname,"../upload.html"));  
  console.log("upload.html");  
  res.sendFile(path.join(__dirname,"../public/upload.html"));  
  
});  
module.exports = router;