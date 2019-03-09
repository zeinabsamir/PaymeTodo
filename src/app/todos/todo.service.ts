import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _todosUrl = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) { }

  getAllTodos() {
    return this.http.get(this._todosUrl + 'listTodos')
  }

  createTodo(todo) {
    return this.http.post<any>(this._todosUrl + 'addTodo', todo)
  }
}
