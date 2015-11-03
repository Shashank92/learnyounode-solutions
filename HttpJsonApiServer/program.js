var http = require('http'),
    url = require('url'),
    port = process.argv[2];

function parsetime(date) {
    return {
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
    };
}

function unixtime(date) {
    return {unixtime: date.getTime()};
}

var timeFuncs = {
    '/api/parsetime': parsetime,
    '/api/unixtime': unixtime,
};

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true),
        date = new Date(parsedUrl.query.iso),
        timeFunc = timeFuncs[parsedUrl.pathname];
        
    if (timeFunc) {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(timeFunc(date)));
    } else {
        res.writeHead(404);
        res.end();
    }
});
server.listen(port);
