import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { IToDoItem } from 'src/app/models/entities/IToDoItem';
import { ToDoItemStatus } from 'src/app/models/enums/ToDoItemStatus';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.css']
})
export class NewItemComponent implements OnInit {
  newItemForm;

  @Output() newItem = new EventEmitter<IToDoItem>();

  constructor(private formBuilder: FormBuilder) {
    this.newItemForm = this.formBuilder.group({
      title: '',
      description: ''
    });
   }

  ngOnInit() {
  }

  submitNewItem(toDoData): void {
    let newId = Math.floor(Math.random() * Math.floor(9999));
    this.newItem.emit(<IToDoItem>{
      id: newId,
      title: toDoData.title,
      description: toDoData.description,
      status: ToDoItemStatus.Open
    });

    this.newItemForm.reset();
  }
}
