"use strict";

let list = [];

console.log(list.length);
list.push("William");
list.length === 0 ? console.log("Is the list empty? true") : console.log("Is the list empty? false");
list.push("John");
list.push("Amanda");
console.log(list.length);
console.log(list[2]);

for (let i = 0; i < list.length; i++) {
    console.log(list[i]);
}

for (let i = 0; i < list.length; i++) {
    console.log(i + 1 + ". " + list[i]);
}

list.splice(1, 1);
console.log(list.reverse());
list.length = 0;
