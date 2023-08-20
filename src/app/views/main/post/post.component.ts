import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {PostService} from "../../../shared/services/post.service";
import {PostsType} from "../../../types/posts-type";
import {Subscription, switchMap} from "rxjs";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy{

  post: PostsType = {} as PostsType;
  private subscription: Subscription | null = null;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private postService: PostService,
              private _snakeBar: MatSnackBar) {
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
          this._snakeBar.open('Что-то пошло не так');
          this.router.navigate(['/posts'])
        }
      })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

}
