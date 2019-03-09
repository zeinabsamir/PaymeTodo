import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';
import { TodosCreateComponent } from './todos/todos-create/todos-create.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {path : '', component : LoginComponent},
  { path: 'todos', component: TodosListComponent },
  { path: 'create', component: TodosCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
