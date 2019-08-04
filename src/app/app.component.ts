import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'ToDo List';
  newTitle: string;
  newText: string;
  todoItems: any[];

  ngOnInit(): void {
    this.getData();
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

  show(): void {
    console.log(this.todoItems);
  }

  deleteItem(id: number): void {
    const index = this.todoItems
    .findIndex(el => el.id === id);

    if (index > -1)
      this.todoItems.splice(index, 1); 
  }

  getData(): void {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => {
        todos.length = 10;
        return todos;
      })
      .then(todos => todos.map(td => {
        return {
          id: td.id,
          status: td.completed,
          text: td.title,
          title: td.reqtitle ? td.reqtitle : `Untitled ${td.id}`
        }
      }))
      .then(todos => this.todoItems = todos);
  }
}
