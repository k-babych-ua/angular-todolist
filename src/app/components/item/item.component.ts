import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IToDoItem } from 'src/app/models/entities/IToDoItem';
import { ToDoItemStatus } from 'src/app/models/enums/ToDoItemStatus';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  ToDoItemStatus = ToDoItemStatus;

  @Input() toDoItem: IToDoItem;
  @Output() deleteItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  completeThisItem(isCompleted: boolean): void {
    this.toDoItem.status = isCompleted ? ToDoItemStatus.Completed : ToDoItemStatus.Open;
  }

  deleteThisItem(): void {
    this.deleteItem.emit(this.toDoItem.id);    
  }
}
