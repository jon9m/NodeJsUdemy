var person = {
    name: 'manoj',
    country: 'SL',
    city: 'GL'
}

var fs = require('fs');

var personJson = JSON.stringify(person);
fs.writeFileSync('person.json', personJson);

var personString = fs.readFileSync('person.json');
console.log(personString.toString());

var personObj = JSON.parse(personString);
console.log(personObj.name);
console.log(personObj.country);
console.log(personObj.city);