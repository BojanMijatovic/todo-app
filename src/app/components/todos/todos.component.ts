import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = [];

  inputTodo: string = '';

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
      {
        title: 'Todo Four',
        completed: true,
      },
    ];
  }

  public toggleTodo(id: number): void {
    this.todos[id].completed = !this.todos[id].completed;
  }

  public deleteTodo(id: number): void {
    this.todos.splice(id, 1);
  }

  public addTodo(): void {
    this.todos.push({
      title: this.inputTodo,
      completed: false,
    });
    this.inputTodo = '';
  }
}
