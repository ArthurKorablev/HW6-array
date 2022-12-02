let arr = [];
for (let i = 0; i < 5; i++){
    let item = prompt("Type an element of array");
    if (!isNaN(item)) {
        item = Number(item);
    }
    arr.push(item);
}

console.log(arr);

console.log(arr.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
}));


arr.splice(1, 3);
console.log(arr);
