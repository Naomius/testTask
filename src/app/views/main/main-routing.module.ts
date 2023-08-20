import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostsComponent} from "./posts/posts.component";
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  {path: 'posts', component: PostsComponent},
  {path: 'post/:id', component: PostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
