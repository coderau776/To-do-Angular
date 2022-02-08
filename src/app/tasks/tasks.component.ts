import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit,OnChanges {
  @Input() item:String='';
  
  tasks:any[];
  constructor() { 
    this.tasks=[
      {
        'id':1,
        'task':'Sleep'  
      },
      {
        'id':2,
        'task':'Study'  
      },
      {
        'id':3,
        'task':'Work'  
      },
      {
        'id':4,
        'task':'Eat'  
      },
      {
        'id':5,
        'task':'Drink'  
      },

    ];

   
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.item==='')
      return;
    if(this.tasks.length!=0)
    {
      this.tasks=[{'id':this.tasks.slice(-1)[0].id+1,'task':this.item},...this.tasks]
    }
    this.tasks=[{'id':1,'task':this.item},...this.tasks]
  }
  
  deleteFromList(id:number){
    this.tasks=this.tasks.filter((task)=>{
      return task.id!==id;
    })
  }


  ngOnInit(): void {
  }

}
