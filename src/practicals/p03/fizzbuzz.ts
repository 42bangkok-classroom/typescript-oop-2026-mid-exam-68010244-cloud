// Write your code below
export{};
const input = process.argv.slice(2);
const num = Number(input);

for (var i = 1; i < num; i++) {
    if (i % 5 == 0 && i % 3 == 0) {console.log("FizzBuzz"); continue;} 
    else if (i % 3 == 0) {console.log("Fizz"); continue;}
    else if (i % 5 == 0) {console.log("Buzz"); continue;}
    else console.log(i);

}