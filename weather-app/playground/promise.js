var somepromise = new Promise((resolve, reject) => {
    //Async code *** to execute

    //Resolve and reject are two callback functions

    //call resolve for success case
    // resolve("success!");

    //call reject for error case
    reject("failure!");
});

//Need to call promise method 'then or catch' in order to execute the promise

somepromise.then((message) => {
    //Will execute the async code *** above

    //handle resolve
    console.log(message);
}, (error) => {
    console.log('In second argument ot then ', error);
}).catch((error) => {
    //Or handle reject 
    console.log('In catch ', error);
});


