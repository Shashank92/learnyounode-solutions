var fs = require('fs'),
    filePath = process.argv[2];

console.log(fs.readFileSync(filePath, 'utf8').split('\n').length - 1);
