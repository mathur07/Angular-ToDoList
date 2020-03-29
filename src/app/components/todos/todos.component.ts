import { Component, OnInit } from '@angular/core';
import { Todo } from '../../model/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      { id: 1, title: 'test1', completed: true },
      { id: 2, title: 'test2', completed: false },
      { id: 3, title: 'test3', completed: true }
    ];
  }
}
