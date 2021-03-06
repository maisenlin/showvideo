var path = require("path");  
var moment = require("moment");  
var express = require("express");  
var multer  = require('multer');  
  
var storage = multer.diskStorage({  
  destination: function (req, file, cb) {  
    cb(null, path.join(__dirname,"/../uploads"));  
  },  
  filename: function (req, file, cb) {  
    var date = new Date();  
    cb(null, "("+moment().format("YYYY-MM-DD")+")"+file.originalname);  
  }  
});  
  
var upload = multer({ storage: storage })  
  
var router = express.Router();  
  
router.post('/upload', upload.single('avatar'), function (req, res, next) {  
    res.send('文件上传成功')  
    console.log(req.file);  
    console.log(req.body);  
});  
router.get('/upload2', function (req, res, next) {  
  res.send('文件上传成功')
});
  
module.exports = router;