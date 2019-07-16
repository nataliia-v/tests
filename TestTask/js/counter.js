'use strict';

const counterItems = [
    {
        img : "./images/clients.png",
        number: 3587,
        counterCategory: "Statisfied clients",
        category: "clients",
    },
    {
        img : "./images/coffee.png",
        number: 207,
        counterCategory: "Cups of coffee",
        category: "coffee",
    },
    {
        img : "./images/posts.png",
        number: 2500,
        counterCategory: "Blog posts",
        category: "posts",
    },
    {
        img : "./images/likes.png",
        number: 873,
        counterCategory: "Likes",
        category: "likes",
    },
    {
        img : "./images/launched.png",
        number: 900,
        counterCategory: "We launched",
        category: "launched",
    },
];

const counter = document.querySelector('.counter');


let createCounterItem = (post) => {

    let counterItem = document.createElement('div');
    let img = document.createElement("img");
    let counterNumber = document.createElement("p");
    let counterName = document.createElement("p");
    let line = document.createElement('div');

    counterItem.appendChild(img);
    counterItem.appendChild(counterNumber);
    counterItem.appendChild(counterName);
    counterItem.appendChild(line);

    counterItem.className = "counterItem";
    img.className = "counterImage";
    counterNumber.className = "counterNumber";
    counterName.className = "counterName";
    line.className = "underLine";

    img.src = post.img;
    counterNumber.textContent = post.number;
    counterName.textContent = post.counterCategory;

    return counterItem;
};

let renderCounterItems = (posts, containerSelector) => {

    posts.forEach(post => {
        containerSelector.appendChild(createCounterItem(post));
    });
};

renderCounterItems(counterItems, counter);

let counterValue = document.querySelector('.counterNumber').textContent;

function change() {
    let elem = document.querySelector('.counterNumber');
    elem.innerHTML = counterValue;
    counterValue++;
}

function startTimer () {
    setInterval(change, 3000);}

startTimer();
