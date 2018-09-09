console.log('inside notes js file');

module.exports.age = 22;

module.exports.addNumbers = (...nums) => {
    let sum = 0;
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        sum += element;
    }
    return sum;
}