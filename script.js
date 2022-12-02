const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
};

let arr = [];
for (let i = 0; i < 40; i++){
    arr.push(randomNum(1, 100));
}

console.log(arr);

console.log(arr.sort((a, b) => { return a - b }));


arr.splice(1, 3);
console.log(arr);

