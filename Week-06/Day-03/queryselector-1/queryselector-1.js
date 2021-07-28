"use strict";

const king = document.getElementById("b325").textContent;
console.log(king);

const businessLamp = document.querySelectorAll(".big");
console.log(businessLamp[0].textContent, ", ", businessLamp[1].textContent,);

const conceitedKing = document.querySelectorAll(".container")[0];
alert(conceitedKing.children[0].textContent);
alert(conceitedKing.children[1].textContent);

const noBusiness = document.getElementsByTagName("body")[0].getElementsByTagName("div");
console.log(noBusiness[0].textContent, ", ", noBusiness[1].textContent, ", ", noBusiness[2].textContent,);