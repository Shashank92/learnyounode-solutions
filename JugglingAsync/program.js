var http = require('http'),
    urls = process.argv.slice(2),
    onEndFuncs = [],
    i, intervalID;

urls.forEach(function (url, i) {
    http.get(url, function (response) {
        var alldata = '';

        response.setEncoding('utf8');
        response.on('error', console.error);
        response.on('data', function (data) {
            alldata += data; 
        }); 
        response.on('end', function () {
            onEndFuncs[i] = function () {
                console.log(alldata);
                delete onEndFuncs[i];
            };
        });
    });
});

i = 0, intervalID = setInterval(function () {
    var func = onEndFuncs[i];

    if (func) {
        func();
        if (++i === urls.length) {
            clearInterval(intervalID);
        }
    }
}, 0);
