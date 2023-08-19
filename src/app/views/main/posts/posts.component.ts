import {Component, OnInit} from '@angular/core';
import {PostService} from "../../../shared/services/post.service";
import {PostsType} from "../../../types/posts-type";
import {Observable} from "rxjs";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit{

  postsArticles!: Observable<PostsType[]>

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.postsArticles = this.postService.getPosts()
  }

}
