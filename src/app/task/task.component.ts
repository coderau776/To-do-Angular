import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  @Input() task:any
  @Output() deleteItem = new EventEmitter();
  editable:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }
  editableReverse(){
    this.editable=true;
  }
  editableNormal()
  {
    this.editable=false;
  }
  removeSelection(id:number){
    this.deleteItem.emit(id)
  }
}
