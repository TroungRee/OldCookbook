var express = require("express");
var router = express.Router();
var formidable = require('formidable');
var mv = require('mv');


router.get("/",function(req,res){
    res.sendFile(__dirname + "/public/html/index.html");
});

router.post("/recepies",function(req,res){
		res.sendFile(path.resolve(__dirname,"public/views/index.html"));
});

/*
router.get("/display",function(req,res){
	    res.sendFile(__dirname + "/public/views/displayImage.html");
});

router.get('/request', function(req, res){
			res.json(imageInfo);
});

router.post('/fileupload', function(req, res){
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
	      var oldpath = files.filetoupload.path;
	      var newpath = __dirname + '/public/images/' + files.filetoupload.name;
				imageInfo.name = files.filetoupload.name;
	      mv(oldpath, newpath, function (err) {
		        if (err) throw err;
		        res.write('File uploaded and moved!');
		        res.end();
	      });
    });
});
*/
module.exports = router;
