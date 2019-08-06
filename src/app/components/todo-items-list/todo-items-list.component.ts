import { Component, OnInit } from '@angular/core';

import { IToDoItem } from 'src/app/models/entities/IToDoItem';

import { TodoItemsService } from 'src/app/services/todo-items.service';

@Component({
  selector: 'app-todo-items-list',
  templateUrl: './todo-items-list.component.html',
  styleUrls: ['./todo-items-list.component.css']
})
export class TodoItemsListComponent implements OnInit {
  toDoItems: IToDoItem[];
  constructor(private toDoItemsService: TodoItemsService) { }

  ngOnInit() {
    this.toDoItemsService.getData(15).then(data => {
      this.toDoItems = data;
    });
  }
}
