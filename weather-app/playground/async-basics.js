console.log('Stating app');

const request = require('request');
const yargs = require('yargs');

request({
    url: 'https://jsonplaceholder.typicode.com/todos/1',
    json: true
}, (error, response, body) => {
    if (error) {
        console.log(error);
    }
    if (body) {
        console.log(body);
    }

    // console.log(response);
})


console.log('Finishing app');