
// console.log(Math.floor(Math.random() * 11));

let inputnums = [3, 8];

let generatedNums = [];
let i = 0
do {
    // console.log(i)
    generatedNums[i] = Math.floor(Math.random() * 11)
    i++
}
while (i < 6)

let sn = 0;
let correctscore = [];
let ci = 0;
while (sn < inputnums.length) {
    if (generatedNums.includes(inputnums[sn])) {
        correctscore[ci] = inputnums[sn];
        ci++
    }
    sn++
}

console.log(generatedNums)
console.log(correctscore)
if (correctscore.length == 2) {
    console.log('WIN');
} else {
    console.log("O lule");
}
