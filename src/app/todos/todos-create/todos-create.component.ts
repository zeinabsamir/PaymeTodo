import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TodoService } from '../todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todos-create',
  templateUrl: './todos-create.component.html',
  styleUrls: ['./todos-create.component.css']
})
export class TodosCreateComponent implements OnInit {

  constructor(private _todoService: TodoService,
              private _route: Router  ) { }

  ngOnInit() {
  }

  onAddTodo(form: NgForm) {
    if (form.invalid) {
      return;
    }
     this._todoService.createTodo(form.value);
     this._route.navigate(['/todos']);
  }
}
