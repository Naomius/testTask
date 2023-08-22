import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostService} from "../../../shared/services/post.service";
import {PostsType} from "../../../types/posts-type";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, OnDestroy{

  postsArticles: PostsType[] = [];
  filteredPostsList: PostsType[] = [];

  searchString = '';
  error = '';

  newsPostSub!: Subscription;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.newsPostSub = this.postService.getPosts()
      .subscribe( {
        next: (postArticles: PostsType[]) => {
          this.postsArticles = postArticles
        },
        error: (error) => {
          this.error = error.message
        }
  });
  }

  filterPosts(str: string): void {
    if (str.trim()) {
      this.searchString = str;
      this.filteredPostsList = this.postsArticles.filter(news => news.title.toLocaleLowerCase().includes(str.toLowerCase()));
    } else {
      this.searchString = str;
      this.filteredPostsList = [];
    }
  }

  cleanInput(): void {
    this.searchString = '';
    this.filteredPostsList = [];
  }

  ngOnDestroy(): void {
    if (this.newsPostSub) {
      this.newsPostSub.unsubscribe();
    }
  }

}
