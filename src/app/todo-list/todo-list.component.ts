import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Todo} from './todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TodoListComponent implements OnInit {
  todos:Array<Todo>;
  newTaskName: String;

  constructor() { 
    this.newTaskName="";
    this.todos = [
      
      new Todo('task1',true),
      new Todo('task2',true),
      new Todo('task3',true),
      new Todo('task4',true),
      new Todo('task5',true)
    ]
  }

  addNewTask() {
    this.todos.push( new Todo(this.newTaskName,true));
  }

  ngOnInit() {
  }

}
