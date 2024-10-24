// variables

//primitive types
let userName = "anna"; //string
let userAge = 25; //number
let userStatus = false; //boolean
let x = null; //null
let y; //undefined

console.log(typeof userAge); //number

// if statement

let number = 10;

if (number < 15) {
  console.log("hi");
} else {
  console.log("error");
}

//dom & events
let newpDescr = document.createElement("p");
newpDescr.innerText = "Hello World";
newpDescr.classList.add("descr", "text");
newpDescr.classList.replace("text", "newText");

document.getElementById("wraper").appendChild(newpDescr);

//
let btnElement = document.getElementById("btn-click");

btnElement.addEventListener("click", function () {
  alert("You clicked this button");
});

//
let newBtn = document.getElementById("btn-new");

newBtn.addEventListener("click", function () {
  document.body.classList.toggle("bodyClass");
});

//
let usernameElement = document.getElementById("username");

usernameElement.addEventListener("keydown", function () {
  usernameElement.style.border = "2px solid green";
});

// js burger bar
let navel = document.getElementById("navBar");
let burgerEl = document.getElementById("burgerBar");

burgerEl.addEventListener('click', function() {
    navel.classList.toggle('activeNav');
    
})
