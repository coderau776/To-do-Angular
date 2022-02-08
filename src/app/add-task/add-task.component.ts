import { Component, EventEmitter, OnInit, Output, } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() newItemEvent = new EventEmitter();
  constructor() { }
  task:String ='';

  ngOnInit(): void {
  }

  onClick():void{
    this.newItemEvent.emit(this.task)
    this.task=''
  }

}
