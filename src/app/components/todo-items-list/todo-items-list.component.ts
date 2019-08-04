import { Component, OnInit } from '@angular/core';

import { IToDoItem } from 'src/app/models/entities/IToDoItem';
import { ToDoItemStatus } from 'src/app/models/enums/ToDoItemStatus';

@Component({
  selector: 'app-todo-items-list',
  templateUrl: './todo-items-list.component.html',
  styleUrls: ['./todo-items-list.component.css']
})
export class TodoItemsListComponent implements OnInit {
  toDoItems: IToDoItem[];
  constructor() { }

  ngOnInit() {
    this.getItems(15);
  }

  getItems(amount:number): void {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(todos => todos.slice(0, amount))
    .then(todos => todos.map(td => {
      return <IToDoItem> {
        id: td.id,
        title: td.title,
        description: td.description ? td.description : "",
        status: td.completed ? ToDoItemStatus.Completed : ToDoItemStatus.Open
      };
    }))
    .then(todos => this.toDoItems = todos);
  }
}
