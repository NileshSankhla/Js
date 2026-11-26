const name = "nilesh";
const age = 19;

console.log(name + " " + age); // older way

console.log(`Hello my name is ${name} and my age is ${age}`); //much better way

// other method to declaring array

const gameName = new String("GTA6");
console.log(gameName);

// if you console log in console of browser it will provide the key value pair
// we can access keys via
console.log(gameName[0]);

// some string fxns

console.log(gameName.indexOf("A")); //if found return index else -1
console.log(gameName.charAt(2)); // if present give char else empty string

const newString = gameName.substring(1, 3); // kaha se kaha tak but last wala cover nahi hoga and negative support nahi karta
const anotherString = gameName.slice(-3, 2);

console.log(newString);
console.log(anotherString);

const Time = "    Eight and Fortyfive     ";
console.log(Time);
console.log(Time.trim());

const url = "https://thenilesh%20sankhla.com"; //by mistake user put a space and browser treat space as %20 character
console.log(url.replace("%20", "-"));
console.log(url.replace("https://", "").replace("%20", ""));

console.log(url.includes("the"));

//what if i need that the something seperated by dashes spaces then we use string.split
