import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PostService} from "../../../shared/services/post.service";
import {PostsType, PostType} from "../../../types/posts-type";
import {Subscription, switchMap} from "rxjs";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy{

  post!: PostType;
  private subscription: Subscription | null = null;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private postService: PostService) {
  }



  ngOnInit(): void {
    this.subscription = this.activatedRoute.params
      .pipe(
        switchMap((params: Params) => this.postService.getPost(params['id']))
      )
      .subscribe({
        next: (data: PostsType) => {
          this.post = data;
        },
        error: (error) => {
          this.router.navigate(['/posts'])
        }
      })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
