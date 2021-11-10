import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];
  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        title: 'Todo One',
        completed: false,
      },
      {
        title: 'Todo Two',
        completed: false,
      },
      {
        title: 'Todo Three',
        completed: false,
      },
    ];
  }
}
