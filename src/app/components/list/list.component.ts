import { Component, OnInit, Input } from '@angular/core';

import { IToDoItem } from 'src/app/models/entities/IToDoItem';
import { TodoItemsService } from 'src/app/services/todo-items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  toDoItems: IToDoItem[];

  constructor(private toDoItemsService: TodoItemsService) { }

  ngOnInit() {
    this.toDoItemsService.getData(20).then(data => {
      this.toDoItems = data;
    });
  }

  show(): void {
    console.log(this.toDoItems);
  }

  createNewItem(newItem: IToDoItem): void {
    this.toDoItems.push(newItem);
  }

  deleteItem(id: number): void {
    const index = this.toDoItems
      .findIndex(el => el.id === id);

    if (index > -1)
      this.toDoItems.splice(index, 1); 
  }
}
