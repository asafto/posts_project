import PostService from './PostService.js';

const postService = new PostService();
const postsRow = document.getElementById('posts-row');

export async function renderPosts() {
  if (postService.loading == true) {
    postsRow.innerHTML = 'Posts are loading...';
  }
  try {
    const posts = await postService.getPosts();
    postsRow.innerHTML = '';

    posts.forEach((post) => {
      const {
        writtenBy,
        category,
        title,
        article,
        imageUrl,
        publishDate,
      } = post;

      postsRow.innerHTML += postService.postItem(
        writtenBy,
        category,
        title,
        article,
        imageUrl,
        publishDate
      );
    });
  } catch (err) {
    postsRow.innerHTML = `<div class="col-12 mx-auto"><i>${err}...</i></div>`;
  }
}

export async function renderSearchedPosts(searchText, category) {
  if (postService.loading == true) {
    postsRow.innerHTML = 'Posts are loading...';
  }
  try {
    const posts = await postService.searchPosts(searchText, category);
    postsRow.innerHTML = '';

    posts.forEach((post) => {
      const {
        writtenBy,
        category,
        title,
        article,
        imageUrl,
        publishDate,
      } = post;

      postsRow.innerHTML += postService.postItem(
        writtenBy,
        category,
        title,
        article,
        imageUrl,
        publishDate
      );
    });
  } catch (err) {
    postsRow.innerHTML = `<div class="col-12"><i>${err}...</i></div>`;
  }
}

// export async function renderSearchByCategoryPosts(category) {
//   try {
//     const posts = await postService.searchPostsByCategory(category);
//     postsRow.innerHTML = '';

//     posts.forEach((post) => {
//       const {
//         writtenBy,
//         category,
//         title,
//         article,
//         imageUrl,
//         publishDate,
//       } = post;

//       postsRow.innerHTML += postService.postItem(
//         writtenBy,
//         category,
//         title,
//         article,
//         imageUrl,
//         publishDate
//       );
//     });
//   } catch (err) {
//     postsRow.innerHTML = `<div class="col-12"><i>${err}...</i></div>`;
//   }
// }
