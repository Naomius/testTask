import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LayoutComponent} from "./shared/layout/layout.component";
import {AuthGuard} from "./core/auth.guard";
import {AuthLoginGuard} from "./core/auth-login.guard";
import {Page404Component} from "./shared/components/page404/page404.component";

const routes: Routes = [
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {
    path: '',
    component: LayoutComponent,
    children: [
      {path: '', loadChildren: () => import('./views/main/main.module').then(m => m.MainModule)},
      {path: '', loadChildren: () => import('./views/posts-main/posts.module').then(m => m.PostsModule), canActivate: [AuthGuard]},
      {path: '', loadChildren: () => import('./views/user/user.module').then(m => m.UserModule), canActivate: [AuthLoginGuard]},
    ]
  },
  {path: '**', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
