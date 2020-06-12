// Stack

class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }
  // Based on LIFO principle
  push(element) {
    this.items[this.count] = element;
    this.count++;
  }
  pop() {
    this.count--;
    let popped = this.items[this.count];
    delete this.items[this.count];
    return popped;
  }
  peak() {
    return this.items[this.count];
  }
  toString() {
    const items = Object.entries(this.items);
    const events = [];
    for (let i of items) {
      events.push(i);
    }
    return events.join(" and ");
  }
}

// Elements
const item = new Stack();
const btn = document.querySelector(".btn");
const inputSection = document.querySelector("main");
const input = document.querySelector("#userInput");
const displayer = document.querySelector(".displayer");
const eventSection = document.querySelector(".events");
const eventDisplayer = document.querySelector(".events__item");
const hamburger = document.querySelector(".hamburger");
const hams = document.querySelectorAll(".ham");
const nav = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".navigation__con__item");
const addBtn = document.querySelector(".addBtn");
const noEvent = document.querySelector(".noElem");
const allEves = [];

// Functionality
window.addEventListener("load", () => {
  displayer.append(eventSection);
});

addBtn.addEventListener("click", dispInput);

btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (input.value !== "") {
    adder(item, input);
    noEvent.style.display = "none";

    for (let i = 0; i < item.count; i++) {
      allEves.push(item.items[i]);
      console.log(item.items[i]);
      allEves.reverse();
    }
    // Dynamically Create elements
    allEves.forEach((item) => {
      if (allEves.indexOf(item) == allEves.lastIndexOf(item)) {
        const newElem = document.createElement("p");
        const doneElem = document.createElement("button");
        doneElem.textContent = "Done";
        newElem.textContent = item;
        newElem.append(doneElem);
        newElem.setAttribute("class", "eventElem");
        eventDisplayer.insertBefore(newElem, eventDisplayer.lastElementChild);
        // doneElem.addEventListener('click', ()=> doneElem.classList.add('shadowIn'));
      }
    });

    console.log(eventDisplayer);
    showPopUps("normal", "Done!");
  } else {
    console.log("err");
    showPopUps("warning", "Type in a task");
  }
});

// Javascript Styling
let isViewed = false;
hamburger.addEventListener("click", () => {
  if (isViewed == false) {
    nav.classList.remove("moveLeft");
    hams.forEach((ham) => {
      ham.classList.remove("rotateBack");
    });
    hams[1].classList.add("rotate1");
    hams[0].classList.add("rotate2");
    hams[2].classList.add("lastElem");
    nav.classList.add("moveRight");
    isViewed = true;
  } else if (isViewed) {
    hams[1].classList.remove("rotate1");
    hams[0].classList.remove("rotate2");
    hams[2].classList.remove("lastElem");
    // nav.setAttribute('class', 'moveLeft navigation' );
    let t = setTimeout(() => {
      nav.classList.remove("moveRight");
      nav.classList.add("moveLeft");
      isViewed = false;
      hams.forEach((ham) => {
        ham.classList.add("rotateBack");
      });
    }, 2000);
  }
});

console.log(navItems[0]);
console.log(displayer.lastElementChild);

navItems[0].addEventListener("click", () => {
  // console.log(displayer.lastElementChild);
  dispInput();
  console.log("Input section");
});

navItems[1].addEventListener("click", () => {
  // displayer.remove(displayer.lastElementChild) ;
  displayer.replaceChild(eventSection, displayer.lastElementChild);
  console.log("Events section");
});
function dispInput() {
  displayer.replaceChild(inputSection, displayer.lastElementChild);
  displayer.appendChild(inputSection);
}

// Functions
// Add inputs to stack
function adder(stackName, item) {
  stackName.push(item.value);
  item.value = "";
}
// Show pop-ups
function showPopUps(type, msg) {
  const elem = document.createElement("p");
  const elemText = msg;
  elem.textContent = elemText;
  elem.setAttribute("class", type);
  elem.classList.add("pop-up");
  document.body.insertBefore(elem, document.querySelector("script"));
  let t = setTimeout(() => {
    elem.style.display = "none";
    document.body.elem.remove();
  }, 1000);
}
