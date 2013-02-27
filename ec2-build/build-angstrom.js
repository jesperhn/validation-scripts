var AWS = require('aws-sdk');
var config = require('./config');
var fs = require('fs');
var ec2-build = require('./ec2-build');

var userData = fs.readFileSync('./build-angstrom.txt', 'ascii').toString('base64');
userData = new Buffer(userData).toString('base64');
console.log('userData = ' + userData);

var instanceConfig = {
 'SpotPrice': '0.500000',
 'LaunchSpecification': {
  'ImageId': 'ami-02df496b',
  'InstanceType': 'cc1.4xlarge',
  'UserData': userData
 }
};

ec2-build.run(instanceConfig, onRun);

function onRun(err, data) {
 console.log("err = " + err);
 console.log("data = " + JSON.stringify(data));
};
