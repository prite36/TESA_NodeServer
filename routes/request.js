var express = require('express');
var router = express.Router();
var request = require('request');
var data =
'{"sensors":[{"sensName":"temperature","statusCode":"00","statusDesc":"Success","data":[{"sensID":7889,"val_x":0.237,"val_y":1.5430000000000001,"val_z":-0.5,"date":"2018-01-09 23:33:39"},{"sensID":7891,"val_x":0.237,"val_y":1.5430000000000001,"val_z":-0.5,"date":"2018-01-09 23:33:55"},{"sensID":7894,"val_x":0.237,"val_y":1.5430000000000001,"val_z":-0.5,"date":"2018-01-09 23:34:12"}]},{"sensName":"accelerometer","statusCode":"00","statusDesc":"Success","data":[{"sensID":7889,"val_x":0.237,"val_y":1.5430000000000001,"val_z":-0.5,"date":"2018-01-09 23:33:39"},{"sensID":7891,"val_x":0.237,"val_y":1.5430000000000001,"val_z":-0.5,"date":"2018-01-09 23:33:55"},{"sensID":7894,"val_x":0.237,"val_y":1.5430000000000001,"val_z":-0.5,"date":"2018-01-09 23:34:12"}]},{"sensName":"din1","statusCode":"00","statusDesc":"Success","data":[{"sensID":7889,"val_x":0.237,"val_y":1.5430000000000001,"val_z":-0.5,"date":"2018-01-09 23:33:39"},{"sensID":7891,"val_x":0.237,"val_y":1.5430000000000001,"val_z":-0.5,"date":"2018-01-09 23:33:55"},{"sensID":7894,"val_x":0.237,"val_y":1.5430000000000001,"val_z":-0.5,"date":"2018-01-09 23:34:12"}]}]}';
router.get('/', function(req, res, next) {
  // request('http://10.0.0.10/api/temperature/5/all', function(error, response, body) {
  //     // res.json(body);
  //     data = data + body + ',';
  //     console.log(data);
  //     // res.send(body);
  //     // res.render('request', {
  //     //   data: data,
  //     // });
  // });
  //
  // request('http://10.0.0.10/api/accelerometer/5/all', function(error, response, body) {
  //     // res.json(body);
  //     data = data + body + ',';
  //     console.log(data);
  //     // res.send(body);
  //     // res.render('request', {
  //     //   data: data,
  //     // });
  // });
  // data = data + ',';
  // request('http://10.0.0.10/api/din1/5/all', function(error, response, body) {
  //     // res.json(body);
  //     data = data + body +"]}";
  //     console.log(data);
  //     // res.send(body);
  //     res.render('request', {
  //        data: JSON.parse(data),
  //     });
  // });
  res.render('request', {
            data: JSON.parse(data),
         });
});

module.exports = router;
