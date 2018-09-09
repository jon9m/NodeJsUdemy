console.log('Starting app.js');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');

var user = os.userInfo();
console.log(user);

fs.appendFile('greetings.txt', `Starting NodeJS first app ${user.username} ! You are ${notes.age} years old \n`, function (err) { //`` - es6 template strings
    if (err) {
        console.log(err);
    }
});

var result = notes.addNumbers(3, 5, 7, -4, 3, 2, 1);
console.log(result);
