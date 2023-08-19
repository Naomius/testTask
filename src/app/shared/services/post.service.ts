import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PostsType} from "../../types/posts-type";
import {config} from "../../config";

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostsType[]> {
    return this.http.get<PostsType[]>(config.api + 'posts')
  }

  getPost(id: number): Observable<PostsType> {
    return this.http.get<PostsType>(config.api + `posts/${id}`)
  }
}
