import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddPost } from '../store/posts/posts.actions';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-nuevo-posts',
  templateUrl: './nuevo-posts.component.html',
  styleUrls: ['./nuevo-posts.component.scss']
})
export class NuevoPostsComponent implements OnInit {

  public text: string;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
  }

  public addPost() {
    this.store.dispatch(new AddPost({ id: uuid(), text: this.text }));
    this.text = '';
  }

}
