import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { TodoItemsListComponent } from './components/todo-items-list/todo-items-list.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'app-todo-items-list', component: TodoItemsListComponent },
  {
    path: '',
    redirectTo: '/app-todo-items-list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
