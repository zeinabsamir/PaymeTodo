import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  private todos: any[] = [];
  private todosUpdated = new Subject<any[]>();
  private _todosUrl = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {}

  getAllTodos() {
    this.http.get<any>(this._todosUrl + 'listTodos')
    .subscribe(data => {
      this.todos = data;
      this.todosUpdated.next([...this.todos]);
    });
  }

  getTodosUpdatedListener() {
    return this.todosUpdated.asObservable();
  }
  createTodo(todo) {
    this.http.post<any>(this._todosUrl + 'addTodo', todo)
    .subscribe(a => {
      this.todos.push(a);
      this.todosUpdated.next([...this.todos]);
    });
  }
}
