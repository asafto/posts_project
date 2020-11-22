import PromiseService from './PromiseService.js';
import { posts } from './posts.js';

class PostService extends PromiseService {
  
  getPosts = () => {
    return this.getDataAsPromise(posts, 'No posts found');
  };

  searchPosts = (searchText, category) => {
    if (searchText != '' && category != '') {
      const relevantPosts = posts.filter(post => post.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1 && post.category === category);
      return this.getDataAsPromise(relevantPosts, 'No posts found');
    } else if (searchText != '' && category === '') {
      const relevantPosts = posts.filter(post => post.title.toLowerCase().indexOf(searchText.toLowerCase()) != -1);
      return this.getDataAsPromise(relevantPosts, 'No posts found');
    } else {
      const relevantPosts = posts.filter(post => post.category === category);
      return this.getDataAsPromise(relevantPosts, 'No posts found');
    }
  };

  postItem = (writtenBy, category, title, article, imageUrl, publishDate) => {
    return `
      <div class="col-lg-4 col-md-6 my-2">
        <div class="card post-card-wrp">
          <img src="${ imageUrl }" class="card-img-top" alt="post-image">
          <div class="card-body">
            <h5 class="card-title mb-0">${ title }</h5>
            <small>
              <span><i class="fa fa-tag" aria-hidden="true"></i> ${ category }</span>
              <span class="ml-2"><i class="fa fa-calendar" aria-hidden="true"></i> ${ publishDate }</span>
              <span class="ml-2"><i class="fa fa-user-circle" aria-hidden="true"></i> ${ writtenBy }</span>
            </small>
            <p class="card-text mt-2">${ article }</p>
          </div>
        </div>
      </div>`;
  };
}

export default PostService;