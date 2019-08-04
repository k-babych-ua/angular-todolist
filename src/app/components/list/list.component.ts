import { Component, OnInit, Input } from '@angular/core';

import { IToDoItem } from 'src/app/models/entities/IToDoItem';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() toDoItems: IToDoItem[];

  constructor() { }

  ngOnInit() {
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
