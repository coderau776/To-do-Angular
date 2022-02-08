import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  task:String='';
  constructor() { }

  ngOnInit(): void {
  }

  sendToAppTasks(task:String){
    this.task=task;
  }
}
