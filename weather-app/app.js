console.log('Stating app');

const yargs = require('yargs');

const argv = yargs.options({
    address: {
        demand: true,
        alias: 'a',
        describe: 'Address to fetch weather for',
        string: true            // Always parse address as a string
    }
})
    .help()
    .alias('help', 'h')
    .argv;

console.log(argv);
var encodedStr = encodeURIComponent(argv.address);
console.log(encodedStr);
console.log(decodeURIComponent(encodedStr));
console.log('Finishing app');