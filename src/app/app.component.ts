import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  newTitle: string;
  newText: string;
  todoItems: any[];

  ngOnInit(): void {
  }

  addNewItem() {
    const newItem = {
      id: Math.random(),
      status: false,
      title: this.newTitle,
      text: this.newText
    };

    this.todoItems.unshift(newItem);
    this.newText = '';
    this.newTitle = '';
  }

}
