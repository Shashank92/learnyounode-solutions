var filefilter = require('./filefilter'),
    dir = process.argv[2],
    extension = process.argv[3];

filefilter(dir, extension, function (err, filenames) {
    var i;

    if (err) console.error(err);
    for (i = 0; i < filenames.length; i++) {
        console.log(filenames[i]);
    }
});
