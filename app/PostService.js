import PromiseService from './PromiseService';
import { posts } from './posts';

class PostService extends PromiseService {
  getPosts() {
    return this.getDataAsPromise(posts, 'No posts found');
  }

  postItem(writtenBy, category, title, article, imageUrl, publishDate) {
    return `
      <div class="col-md-6 my-2">
        <div class="card post-card-wrp">
          <img class="card-img-top" src="${imageUrl}" alt="post-image"
        </div>
        <div class="card-body">
          <h5 class="card-title mb-0">${title}</h5>
          <small>
            <span><i class="fa fa-tag" aria-hidden="true"></i> ${category}</span>
            <span class="ml-2"><i class="fa fa-calendar" aria-hidden="true"></i> ${publishDate}</span>
            <span class="ml-2"><i class="fa fa-user-circle" aria-hidden="true"></i> ${writtenBy}</span>
          </small>
          <p class="card-text mt-2">${article}</p>
        </div>
      </div>
    `;
  }
}

export default PostService;
