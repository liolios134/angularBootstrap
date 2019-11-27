import {Component, OnInit} from '@angular/core';
import {ITask} from '../../interfaces/ITask';
import {__importDefault} from 'tslib';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public firstName: string = 'John';
  public lastName: string = 'Liolios';

  //Modal form variables
  public taskTitle: string ="";
  public taskDueDate: Date;
  public search: string = "";


  public swalOptions = {
    title: 'Are you sure?',
    showCancelButton: true,
    icon: 'error'
  };
  public todos: ITask[] = [
    {
      _id: '1',
      title: 'Learn Angular',
      completed: false,
      dueDate: new Date('2019-11-28T20:30:00.000Z')
    },
    {
      _id: '2',
      title: 'Learn Javascript',
      completed: false,
      dueDate: new Date('2019-11-28T20:30:00.000Z')
    },
    {
      _id: '3',
      title: 'Learn SCSS',
      completed: false,
      dueDate: new Date('2019-11-28T20:30:00.000Z')
    },
    {
      _id: '4',
      title: 'Learn MongoDB',
      completed: false,
      dueDate: new Date('2019-11-28T20:30:00.000Z')
    }
  ];

  constructor() {
  }

  get completedTasks() {
    return this.todos.filter(task => task.completed === true);
  }

  get uncompletedTasks() {
    return this.todos.filter(task => task.completed === false);
  }


  get name() {
    return this.firstName + ' ' + this.lastName;
  }

  set name(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }

  ngOnInit() {

  }

  public removeTask(_id: string) {
    const thesi = this.todos.findIndex(i => i._id === _id);
    this.todos.splice(thesi, 1);
  }
  public addTask(){
    let newTask = {
      _id : this.todos.length + 1 + "",
      title: this.taskTitle,
      completed: false,
      dueDate: this.taskDueDate
    };
    this.todos.push(newTask);
  }
}
