import { Injectable } from '@angular/core';
import { IToDoItem } from '../models/entities/IToDoItem';
import { ToDoItemStatus } from '../models/enums/ToDoItemStatus';

@Injectable({
  providedIn: 'root'
})
export class TodoItemsService {

  constructor() { }

  public getData(amount: number): Promise<IToDoItem[]> {
    return fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${amount}`)
    .then(response => response.json())
    .then(todos => todos.slice(0, amount))
    .then(todos => todos.map(td => {
      return <IToDoItem> {
        id: td.id,
        title: td.title,
        description: td.description ? td.description : "",
        status: td.completed ? ToDoItemStatus.Completed : ToDoItemStatus.Open
      };
    }));
  }

  public createItem(item: IToDoItem): void {

  }
}
