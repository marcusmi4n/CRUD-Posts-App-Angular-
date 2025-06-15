import { Component } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html'
})
export class PostComponent {
  posts = [];
  newPost = '';

  addPost() {
    if (this.newPost.trim()) {
      this.posts.push(this.newPost);
      this.newPost = '';
    }
  }
}
