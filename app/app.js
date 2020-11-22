import { renderPosts, renderSearchedPosts } from './asyncPosts.js';

renderPosts();

const searchPostsField = document.getElementById('search-posts-field');
const categoryField = document.getElementById('category');

searchPostsField.addEventListener('input', (event) => {
  if (event.target.value != '' || categoryField.value != '') {
    let searchText = event.target.value.trim();
    let category = categoryField.value;
    renderSearchedPosts(searchText, category);
  } else {
    renderPosts();
  }
});

categoryField.addEventListener('change', (event) => {
  if (event.target.value != '' || searchPostsField.value != '') {
    let category = event.target.value;
    let searchText = searchPostsField.value;
    renderSearchedPosts(searchText, category);
  } else {
    renderPosts();
  }
});

document.querySelector('.footer-year').innerHTML = new Date().getFullYear();

//removing event listeners on window close
window.onclose = () => {
  searchPostsField &&
    searchPostsField.removeEventListener('input', (event) => {
      if (event.target.value != '') {
        let searchText = event.target.value.trim();
        let category = categoryField.value;
        renderSearchedPosts(searchText, category);
      } else if (categoryField.value != '') {
        let searchText = event.target.value.trim();
        let category = categoryField.value;
        renderSearchedPosts(searchText, category);
      } else {
        renderPosts();
      }
    });

  categoryField &&
    categoryField.removeEventListener('change', (event) => {
      if (event.target.value != '') {
        let category = event.target.value;
        let searchText = searchPostsField.value;
        renderSearchedPosts(searchText, category);
      } else if (searchPostsField.value != '') {
        let category = event.target.value;
        let searchText = searchPostsField.value;
        renderSearchedPosts(searchText, category);
      } else {
        renderPosts();
      }
    });
};
