import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() taskList:any[] = []

  saveLocal() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList))
  }

  deleteTask(taskIndex: number) {
    this.taskList.splice(taskIndex, 1)
    this.saveLocal()
  }

  constructor() { }

  ngOnInit(): void {
    
    
  }

}
