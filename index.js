import { blogArray } from '/blogposts.js';

const blogContainer = document.getElementById('blogs');

renderBlogs(blogArray, 6);

// event listener for view more / hide button. Targeting dataset because the buttons are rendered dynamically

document.addEventListener('click', function(e) {
    const dataBtn = e.target.dataset.btn;

    if (dataBtn === 'viewMore') {
        renderBlogs(blogArray);
    } else if (dataBtn === 'hide') {
        renderBlogs(blogArray, 6);
    };

});

// functions

function renderBlogs(blogArr, renderVal = blogArr.length) {

    blogContainer.innerHTML = ``;

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
        blogContainer.innerHTML += `
            <button class="view-btn" data-btn="hide">Hide</button>
         `;
    } else {
        blogContainer.innerHTML += `
            <button class="view-btn" data-btn="viewMore">View more</button>
        `;
    }

};