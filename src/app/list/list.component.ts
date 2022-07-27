import { Component, Input, OnInit } from '@angular/core';
import { TaskShareService } from '../form/task-share.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  taskList:any[] = []

  saveLocal() {
    localStorage.setItem('taskList', JSON.stringify(this.taskList))
  }

  deleteTask(taskIndex: number) {
    this.taskList.splice(taskIndex, 1)
    this.saveLocal()
  }

  constructor(private taskShare: TaskShareService) {taskShare.taskShareEvent.subscribe(taskList => this.taskList = taskList)}

  ngOnInit(): void {
    
    
  }

}
