var fs = require('fs'), 
    path = require('path'),
    pathname = process.argv[2], 
    extension = '.' + process.argv[3];

fs.readdir(pathname, function (err, list) {
    var i, filename;
    
    for (i = 0; i < list.length; i++) {
        filename = list[i];
        path.extname(filename) === extension && console.log(filename);
    }
});
