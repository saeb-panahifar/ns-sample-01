import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Item } from '../../models/Item';
import { AppState } from '../../store/app.state';
import { AddAction, RemoveAction } from '../../store/item.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  title: string;
  items$: Observable<Array<Item>>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.items$ = this.store.select((store) => store.items);
  }

  onAdd() {
    this.store.dispatch(new AddAction({ Title: this.title }));
    this.title = null;
  }

  onRemove(item: Item) {
    this.store.dispatch(new RemoveAction(item));
  }

}
