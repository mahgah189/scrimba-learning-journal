import { blogArray } from '/blogposts.js';

const blogContainer = document.getElementById('blogs');
const viewBtnContainer = document.getElementById('view-btn-container');
const hamburgerMenuModal = document.getElementById('hamburger-menu');
const hamburgerMenuShadow = document.getElementById('overlay-shadow');

const hamburgerClasslist = hamburgerMenuModal.classList;
const shadowClasslist = hamburgerMenuShadow.classList;

renderBlogs(blogArray, 6);

// event listener for view more / hide button. Targeting dataset because the buttons are rendered dynamically

document.addEventListener('click', function(e) {
    const dataBtn = e.target.dataset.btn;

    if (dataBtn === 'viewMore') {
        renderBlogs(blogArray);
    } else if (dataBtn === 'hide') {
        renderBlogs(blogArray, 6);
    } else if (dataBtn === 'hamburger-menu') {
        hamburgerMenuToggle();
    } else if (dataBtn === 'hamburger-menu-shadow') {
        hamburgerClasslist.add('hide-element');
        shadowClasslist.add('hide-element');
    }

});

// functions

function renderBlogs(blogArr, renderVal = blogArr.length) {

    blogContainer.innerHTML = ``;
    viewBtnContainer.innerHTML = ``;

    for (let i = 0; i < renderVal; i++) {
        blogContainer.innerHTML += `
            <div class="blog-container">
                <img src="${blogArr[i].image}" alt="${blogArr[i].alt}" />
                <p class="blog-date">${blogArr[i].date}</p>
                <h2>${blogArr[i].title}</h2>
                <p class="blog-description">${blogArr[i].description}</p>
            </div>
        `;
    };

    if (renderVal === blogArr.length) {
        viewBtnContainer.innerHTML += `
            <button class="view-btn" data-btn="hide">Hide</button>
         `;
    } else {
        viewBtnContainer.innerHTML += `
            <button class="view-btn" data-btn="viewMore">View more</button>
        `;
    }

};

function hamburgerMenuToggle() {

    if (hamburgerClasslist.contains('hide-element')) {
        hamburgerClasslist.remove('hide-element');
        shadowClasslist.remove('hide-element');
    } else {
        hamburgerClasslist.add('hide-element');
        shadowClasslist.add('hide-element');
    };
}