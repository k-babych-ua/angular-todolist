import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';
import { NewItemComponent } from './components/new-item/new-item.component';
import { TodoItemsListComponent } from './components/todo-items-list/todo-items-list.component';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'app-todo-items-list', component: TodoItemsListComponent },
  { path: '',
    redirectTo: '/app-todo-items-list',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    ItemComponent,
    NewItemComponent,
    TodoItemsListComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    /* RouterModule.forRoot(
      appRoutes
    ) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
