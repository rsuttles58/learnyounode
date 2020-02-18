let nums = process.argv.slice(2);
let sum = 0;

nums.forEach(number => {
    sum += parseInt(number);
})

console.log(sum);