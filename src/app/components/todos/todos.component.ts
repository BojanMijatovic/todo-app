import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  public todos: Todo[] = [];
  public inputTodo: string = '';

  constructor() {}

  ngOnInit(): void {
    this.getTodos();
  }

  //  local storage methods
  public saveTodos(Todo: object): void {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  public getTodos(): void {
    const todos = localStorage.getItem('todos');
    if (todos) {
      this.todos = JSON.parse(todos);
    }
  }

  //  other methods
  public toggleTodo(id: number): void {
    this.todos[id].completed = !this.todos[id].completed;
    this.saveTodos(this.todos);
  }

  public removeSingleTodo(id: number): void {
    this.todos.splice(id, 1);
    this.saveTodos(this.todos);
  }

  public addTodo(): void {
    if (this.inputTodo.trim().length > 0) {
      this.todos.push({
        title: this.inputTodo,
        completed: false,
      });
    }
    this.saveTodos(this.todos);
    this.inputTodo = '';
  }

  public removeAllTodos(): void {
    this.todos = [];
    this.saveTodos(this.todos);
    localStorage.clear();
  }
}
