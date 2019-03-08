var http = require('http');
// moment is an html formatter
var moment = require('moment');
/*
 callbacks keep asynchronous activities in order

 setTimeout() = callback executed after a given time
 setInterval() = execute callback after every interval

 setImmediate() events

 Process.nextTick() - if you call a process

 npm init

*/
function myCallBack(req, res) {
    // this is requered for http
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // argv 0 is node
    // argv 1 is this .js file
    // argv 2 is entered in the command window "node index.js Las Vegas"
    // yields "Hello Las Vegas"
    //res.end("Hello " + process.argv[2] + ' '+process.argv[3]);

    // testing moment - go to momentjs.com 
    //res.end("Hello " + process.argv[2] + '. It is '+moment().format('LLLL') + " now.");

    // testing moment - go to momentjs.com 
    var begin_time = moment('10:00', "HH:mm");
    var end_time = moment('14:00', "HH:mm");

    var begin_difference = begin_time.diff(moment(), 'minutes');
    var end_difference = moment().diff(end_time, 'minutes');

    var message = 'Hello ' + process.argv[2]
        + '.\nWelcome to our page.\nNow, it is '
        + moment().format('HH:mm:ss')
        + '.\nOur business hours are from '
        + begin_time.format('HH:mm')
        + ' to '
        + end_time.format('HH:mm');

    if (begin_difference > 0) {
        // too early
        message+= '\nPlease come back in '+begin_difference+' minutes.\n';
    }
    if (end_difference>0){
        message+= '\nPlease come back tomorrow';
    }
    res.end(message);


}

http.createServer(myCallBack).listen(8080);