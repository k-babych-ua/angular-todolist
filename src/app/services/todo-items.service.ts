import { Injectable } from '@angular/core';
import { IToDoItem } from '../models/entities/IToDoItem';
import { ToDoItemStatus } from '../models/enums/ToDoItemStatus';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {
  private baseHeaders = {
    "Content-type": "application/json; charset=UTF-8"
  };
  private baseUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor() { }

  public getData(amount: number = 50): Promise<IToDoItem[]> {
    return fetch(`${this.baseUrl}?_limit=${amount}`)
      .then(response => response.json())
      .then(todos => todos.map(td => {
        return <IToDoItem>{
          id: td.id,
          title: td.title,
          description: td.description ? td.description : "",
          status: td.completed ? ToDoItemStatus.Completed : ToDoItemStatus.Open
        };
      }));
  }

  public getItem(id: number): Promise<IToDoItem[]> {
    return fetch(`${this.baseUrl}/${id}`)
      .then(response => response.json())
      .then(todos => todos.map(td => {
        return <IToDoItem>{
          id: td.id,
          title: td.title,
          description: td.description ? td.description : "",
          status: td.completed ? ToDoItemStatus.Completed : ToDoItemStatus.Open
        };
      }));
  }

  public createItem(item: IToDoItem): Promise<number> {
    return fetch(`${this.baseUrl}`, {
      method: "POST",
      body: JSON.stringify(item),
      headers: this.baseHeaders
    })
      .then(response => response.json())
      .then(newItem => {
        return newItem.id;
      });
  }

  public updateItem(item: IToDoItem): Promise<IToDoItem> {
    if (item && item.id) {
      return fetch(`${this.baseUrl}`, {
        method: "PUT",
        body: JSON.stringify(item),
        headers: this.baseHeaders
      })
        .then(response => response.json())
        .then(newItem => {
          return newItem;
        });
    }
    else {
      console.error("Cannot update item without id");
    }
  }

  public updateTitle(id: number, title: string): Promise<IToDoItem> {
    if (id) {
      return fetch(`${this.baseUrl}`, {
        method: "PATCH",
        body: JSON.stringify({
          title: title
        }),
        headers: this.baseHeaders
      })
        .then(response => response.json())
        .then(newItem => {
          return newItem;
        });
    }
    else {
      console.error("Cannot update item without id");
    }
  }

  public deleteItem(id: number): void {
    if (id) {
      fetch(`${this.baseUrl}/${id}`, {
        method: "DELETE"
      });
    }
    else {
      console.error("Cannot delete item without id");
    }
  }
}
