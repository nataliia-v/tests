'use strict';

const allPosts = [
    {
        img : "./images/photo1tab.png",
        header: "Claritas Etiam Processus",
        categoryText: "Photography, Nature",
        category: "photography",
    },
    {
        img : "./images/photo2tab.png",
        header: "Quam Nutamus Farum",
        categoryText: "Graphic Design, Mock-Up",
        category: "webDesign",
    },
    {
        img : "./images/photo3tab.png",
        header: "Usus Legentis Videntur",
        categoryText: "Photography, Holiday",
        category: "photography",
    },
    {
        img : "./images/photo4tab.png",
        header: "Claritas Etiam Processus",
        categoryText: "Photography, Nature",
        category: "photography",
    },
    {
        img : "./images/photo5tab.png",
        header: "Quam Nutamus Farum",
        categoryText: "Graphic Design, Mock-Up",
        category: "webDesign",
    },
    {
        img : "./images/photo6tab.png",
        header: "Usus Legentis Videntur",
        categoryText: "Photography, Holiday",
        category: "photography",
    }
];

let createPostCard = (post) => {
    let cardItem = document.createElement('div');
    let img = document.createElement("img");
    let textWrap = document.createElement('div');
    let cardHead = document.createElement("p");
    let cardCategory = document.createElement("p");

    cardItem.className = "cardItem";
    textWrap.className = "textWrap";
    cardHead.className = "cardHead";
    cardCategory.className = "cardCategory";

    cardItem.appendChild(img);
    cardItem.appendChild(textWrap);
    textWrap.appendChild(cardHead);
    textWrap.appendChild(cardCategory);

    img.src = post.img;
    cardHead.textContent = post.header;
    cardCategory.textContent = post.categoryText;

    return cardItem;
};

let createCards = (posts, containerSelector = '.cards') => {
    const cardsContainer = document.querySelector(containerSelector);

    posts.forEach(post => {
        cardsContainer.appendChild(createPostCard(post));
    });
};

const emptyCards = (containerSelector = '.cards') => {
    const cardsContainer = document.querySelector(containerSelector);
    cardsContainer.innerHTML = '';
};

function Tabs() {
    const menuElements = document.querySelectorAll('[data-tab]');
    const tabButtonsContainer = document.querySelector('.tabButtons');
    createCards(allPosts);

    const clear = () => {
        emptyCards();
        menuElements.forEach(menuElement => menuElement.classList.remove('active'));
    };

    const change = e => {
        if (e.target.nodeName === 'BUTTON') {
            clear();
            const selectedTabName = e.target.getAttribute('data-tab');
            e.target.classList.add('active');

            const cardsToRender = selectedTabName === 'all' ? allPosts : allPosts.filter(post => post.category === selectedTabName);
            createCards(cardsToRender);
        }
    };

    tabButtonsContainer.addEventListener('click', change, false);
}

const connectTabs = new Tabs();
