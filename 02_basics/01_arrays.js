arr = [1, 2, 3, 4];

arr.push(5);
console.log(arr);

arr.unshift(9);
console.log(arr);
arr.pop();
arr.shift();
console.log(arr);

mtr = arr.join();
console.log(mtr);

console.log(typeof arr, "\n", typeof mtr);

// slice vs splice

a = arr.slice(1, 3);
console.log("a", a);
console.log("arr", arr);
b = arr.splice(1, 3);
console.log("b", b);
console.log("arr", arr);
