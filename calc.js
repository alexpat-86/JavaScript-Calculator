const display = document.getElementById("result");
// the display where numbers are shown
const keys = document.querySelector(".keys");
//every pressable button
const operators = 
  document.querySelector(".operator");
//operators 
const decimals = 
 document.querySelector(".decimal");
const numone = keys.querySelector('#num1').textContent;
const numtwo =
  keys.querySelector("#num2").textContent;
const numthree =
keys.querySelector("#num3").textContent;
const numfour =
keys.querySelector("#num4").textContent;
const numfive =
keys.querySelector("#num5").textContent;
const numsix =
keys.querySelector("#num6").textContent;
const numseven =
keys.querySelector("#num7").textContent;
const numeight =
keys.querySelector("#num8").textContent;
const numnine =
keys.querySelector("#num9").textContent;
const numzero =
keys.querySelector("#num0").textContent;
const decimal =
keys.querySelector("#dot").textContent;
//////////////////////////////////////////
const add = keys.querySelector("#plus").textContent;
const subtract = keys.querySelector("#minus").textContent;
const divide = keys.querySelector("#divide").textContent;
const multiply = keys.querySelector("#times").textContent;

//gets numbers and converts them to int
function numclickone() {
 let convertone = parseInt(numone,10);
	display.innerHTML += convertone;		
}
function numclicktwo() {
	let converttwo = parseInt(numtwo,10);
	display.innerHTML += converttwo;
}
function numclickthree() {
	let convertthree = parseInt(numthree,10);
	display.innerHTML += convertthree;
}
function numclickfour() {
	let convertfour = parseInt(numfour,10);
	display.innerHTML += convertfour;
}
function numclickfive() {
	let convertfive = parseInt(numfive,10);
	display.innerHTML += convertfive;
}
function numclicksix() {
	let convertsix = parseInt(numsix,10);
	display.innerHTML += convertsix;
}
function numclickseven() {
	let convertseven = parseInt(numseven,10);
	display.innerHTML += convertseven;
}
function numclickeight() {
	let converteight = parseInt(numeight,10);
	display.innerHTML += converteight;
}
function numclicknine() {
	let convertnine = parseInt(numnine,10);
	display.innerHTML += convertnine;
}
function numclickzero() {
	let convertzero = parseInt(numzero,10);
	display.innerHTML += convertzero;
}
function decimaldot() {
	display.innerHTML += decimal;
}
function clearall() {
	display.innerHTML = "";
}
function addition() {
	display.innerHTML += add;
}
function multiplication() {
	display.innerHTML += multiply;
}
function division() {
	display.innerHTML += divide;
}
function subtraction() {
	display.innerHTML += subtract;
}
//////////////////////////////////////////
function calculateAdd() {
if (display.textContent.indexOf('+') > -1) {
let firstNum = document.getElementById("result").textContent;
let endIndex1 = firstNum.indexOf("+","-","%","X");
let textBefore = firstNum.slice(0, endIndex1);
let secNum = document.getElementById("result").textContent;
let endIndex2 = secNum.indexOf("+","-","%","X");
let textAfter = secNum.slice(endIndex2+1, 15); 
display.innerHTML = +textBefore + +textAfter
} 
 }

function calculateSubtract() {
if (display.textContent.indexOf('-') > -1) {
let firstNum = document.getElementById("result").textContent;
let endIndex1 = firstNum.indexOf("-");
let textBefore = firstNum.slice(0, endIndex1);
let secNum = document.getElementById("result").textContent;
let endIndex2 = secNum.indexOf("-");
let textAfter = secNum.slice(endIndex2+1, 15); 
display.innerHTML = +textBefore - +textAfter
} 
 }
 
function calculateTimes() {
if (display.textContent.indexOf('X') > -1) {
let firstNum = document.getElementById("result").textContent;
let endIndex1 = firstNum.indexOf("X");
let textBefore = firstNum.slice(0, endIndex1);
let secNum = document.getElementById("result").textContent;
let endIndex2 = secNum.indexOf("X");
let textAfter = secNum.slice(endIndex2+1, 15); 
display.innerHTML = +textBefore * +textAfter
} 
}

function calculateDivide() {
if (display.textContent.indexOf('%') > -1) {
let firstNum = document.getElementById("result").textContent;
let endIndex1 = firstNum.indexOf("%");
let textBefore = firstNum.slice(0, endIndex1);
let secNum = document.getElementById("result").textContent;
let endIndex2 = secNum.indexOf("%");
let textAfter = secNum.slice(endIndex2+1, 15); 
display.innerHTML = +textBefore / +textAfter
} 
}
//////////////////////////////////////////
function checkcalc() {
	if (display.textContent.indexOf('-') > -1) {
		calculateSubtract();
	} else if (display.textContent.indexOf("+") > -1) {
		  calculateAdd();
	} else if (display.textContent.indexOf("X") > -1) {
		calculateTimes(); 
	} else if (display.textContent.indexOf("%") > -1) {
		calculateDivide();
	}
 		
}

//////////////////////////////////////////
function charlimit() {
let foo = display.textContent.length;
if (foo > 15) {
	display.innerHTML = "";
	alert("character limit reached");
 }
}

setInterval(charlimit, 10);
//////////////////////////////////////////

