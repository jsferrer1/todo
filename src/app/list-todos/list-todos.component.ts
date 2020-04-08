import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  // unstructured to structured
  todos : Todo[]

  message : string

  // [
  //   new Todo(1, 'learn angular', false, new Date()),
  //   new Todo(2, 'learn java', false, new Date()),
  //   new Todo(3, 'learn spring', false, new Date())
  // ]

  // todo = {
  //   id: 1,
  //   description: 'learn angular'
  // }

  constructor(
    private todoService:TodoDataService
  ) { }

  ngOnInit() {
    this.refreshTodos()
  }

  refreshTodos() {
    // returns an Observable
    this.todoService.retrieveAllTodos('test').subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }

  deleteTodo(id) {
    console.log(`delete todo ${id}` )
    this.todoService.deleteTodo('test', id).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }
}
