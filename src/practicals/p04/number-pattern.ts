// Write your code below
// 2 point
export{};


export function numPat(num:number) : void {
    if (isNaN(num) || num <= 0) {return;} {
        for (let i = 1; i <= num; i++) {
            let op = ""
            for (let o = 0; o< num -i;o++) {
            op += " "
            }
            for (let u = i; u >= 1;u--) {
            op+= u
            }
        console.log(op)
        }
    }
}


const input = process.argv.slice(2);
const num = Number(input)
numPat(num);