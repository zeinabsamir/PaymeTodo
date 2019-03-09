import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {

  constructor(private todoService: TodoService) { }

  todos: any[] = [];
  todoSub: Subscription;
  ngOnInit() {
     this.getAllTodos();
  }

  getAllTodos() {
    this.todoService.getAllTodos();
    this.todoSub = this.todoService.getTodosUpdatedListener()
      .subscribe((todos: any[]) => {
        this.todos = todos;
        console.log(todos);
      });
  }


  ngOnDestroy() {

   // this.todoSub.unsubscribe();
  }


}
