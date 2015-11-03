var fs = require('fs'),
    path = require('path');

module.exports = function (dir, extension, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) return callback(err);
        callback(null, list.filter(function (filename) {
            return path.extname(filename) === '.' + extension;
        }));
    });
};
