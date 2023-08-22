import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "../../../shared/services/post.service";
import {PostsType} from "../../../types/posts-type";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy{
  posts: PostsType[] = [];
  postsCopy: PostsType[] = [];

  searchString = '';
  error = '';

  isLoading = false;

  newsPostSub!: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.isLoading = true;
    this.newsPostSub = this.postService.getPosts()
      .subscribe( {
        next: (posts: PostsType[]) => {
          this.posts = this.postsCopy = posts;
          this.isLoading = false;
        },
        error: (error) => {
          this.error = error.message;
          this.isLoading = false;
        }
      });
  }

  filterPosts(str: string): void {
    if (str.trim()) {
      this.searchString = str;
      this.posts = this.postsCopy.filter(news => news.title.toLocaleLowerCase().includes(str.toLowerCase()));
    } else {
      this.cleanInput();
    }
  }

  cleanInput(): void {
    this.searchString = '';
    this.posts = this.postsCopy;
  }

  ngOnDestroy(): void {
    if (this.newsPostSub) {
      this.newsPostSub?.unsubscribe();
    }
  }

}
