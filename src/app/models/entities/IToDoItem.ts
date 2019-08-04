import {ToDoItemStatus} from 'src/app/models/enums/ToDoItemStatus';

export interface IToDoItem {
   id: number;
   title: string;
   description: string;
   status: ToDoItemStatus;
}