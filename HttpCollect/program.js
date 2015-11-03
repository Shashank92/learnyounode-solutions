var http = require('http'),
    url = process.argv[2];

http.get(url, function (response) {
    var alldata = '';

    response.setEncoding('utf8');
    response.on('error', console.error);
    response.on('data', function (data) {
        alldata += data; 
    });
    response.on('end', function () {
        console.log(alldata.length);
        console.log(alldata);
    });
});
