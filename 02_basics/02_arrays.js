arr = ["A", "B", "C"];
mtr = ["D", "E", "F"];

arr.push(mtr);

console.log(arr); // injected array inside array

arr.pop();

htr = arr.concat(mtr);

console.log(htr);

// or you can use spread operator
llr = [...arr, ...mtr];

console.log(llr);

new_arr = [1, 2, 3, [4, 4, 5, [6, 77, 8]], [1, 2, 3], 4, 5];
new_arr = new_arr.flat(Infinity); //requires how much depth should be given I gave infinity

console.log(new_arr);

console.log(Array.isArray("Apple"));
console.log(Array.from("Apple"));
console.log(Array.from({ thing: "apple" })); // we have to provide whether the key or value should be converted in the array

a = 1;
b = 2;
c = 3;

console.log(Array.of(a, b, c));
