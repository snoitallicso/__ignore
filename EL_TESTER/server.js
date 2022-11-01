/**
 * Created by deepqualia on 5/9/2019.
 */

var http = require('http');
var server = http.createServer(function(req, res) {
    res.write('<h1>hello</h1>');
    res.write('hello');
    console.log(document);
    res.end();
});
server.listen(8000);