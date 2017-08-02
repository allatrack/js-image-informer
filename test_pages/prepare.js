var fs = require("fs");
const path = require('path');

//console.log(fs.readFileSync('./001/expected.html'));
var template = fs.readFileSync('./js_template.html',  'utf8');

var files = [];
fs.readdirSync('./templates').forEach(function(file) {
    files.push(file);
});

files.forEach(function(fileName){

    var page = fs.readFileSync('./templates/'+fileName,  'utf8');
    var regex = /MGD_COMPONENT/g;
    var result = page.replace(regex, template);
    var path_to_save ='./output/'+fileName;

    fs.writeFile(path_to_save, result, function(err ) {
        if(err) {
            return console.log(err);
        }

        console.log("The file was saved to path "+path_to_save  +"");
    });
});

