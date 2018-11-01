var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); // Body parser use JSON data

app.post('/newsitems', function(req, res) {

	var currentDateTime = Date.now();

    var outputFilename = './newslist' +  currentDateTime.toString() + '.json'; // path of the file to output

    fs.writeFileSync(outputFilename, JSON.stringify(JSON.parse(req.body.payload), null, 4)); // write to the file system

    res.send('Saved to ' + outputFilename);

});
var port = process.env.PORT || 1337;
app.listen(port);
console.log('Express started on port %d ...', port);