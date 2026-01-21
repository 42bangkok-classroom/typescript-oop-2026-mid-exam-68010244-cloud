// Write your code below
export{};

const input = process.argv.slice(2);
const score = Number(input);

if (isNaN(score) || score > 100 || score < 0 ){
    console.log('Invalid input');
} else if (score >= 80) {
    console.log('Grade is A')
} else if (score >= 70) {
    console.log('Grade is B')
} else if (score >= 60) {
    console.log('Grade is C')
} else if (score >= 50) {
    console.log('Grade is D')
} else {
    console.log('Grade is F')
}