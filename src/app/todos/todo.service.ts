import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos: any[] = [];
  private todosUpdated = new Subject<any[]>();
  private BACKEND_URL = environment.apiUrl;
  // private _todosUrl = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {}

  getAllTodos() {
    this.http.get<any>(this.BACKEND_URL + '/listTodos')
    .subscribe(data => {
      this.todos = data;
      this.todosUpdated.next([...this.todos]);
    });
  }

  getTodosUpdatedListener() {
    return this.todosUpdated.asObservable();
  }
  createTodo(todo) {
    this.http.post<any>(this.BACKEND_URL + '/addTodo', todo)
    .subscribe(a => {
      this.todos.push(a);
      this.todosUpdated.next([...this.todos]);
    });
  }
}
