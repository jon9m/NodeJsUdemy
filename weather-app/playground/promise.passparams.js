var syncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        if ((typeof a === 'number') && (typeof b === 'number')) {
            resolve(a + b);
        } else {
            reject('must be numbers only');
        }
    });
}

// syncAdd(6, '4').then((sum) => {
//     console.log(sum);
//     return syncAdd(sum, 6);
// }, (err) => {
//     console.log(err);
// }).then((sum) => {
//     console.log('After chainning ', sum);
// }, (err) => {
//     console.log('After chainning ', err);
// });

syncAdd(6, 4).then((sum) => {
    console.log(sum);
    return syncAdd(sum, 6);
}).then((sum) => {
    console.log('After chainning ', sum);
}).catch((err) => {
    console.log(err);
});