import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

import { formInput } from '../interface/form-input';
import { TaskShareService } from '../task-share.service';


@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  taskList:formInput[] = []

  constructor(private taskShare: TaskShareService, private router: Router) {
    this.taskShare.taskListDataIn.subscribe((taskList: formInput[]) => this.taskList = taskList);
    this.router.events.subscribe((ev) => {if (ev instanceof NavigationEnd) {this.updateFormDataIn()}});
  }

  deleteTask(taskIndex: number) {
    if (this.router.url.includes('/edit')) {
      alert("Salve as alterações primeiro antes de excluir itens :)")
    } else {
    this.taskList.splice(taskIndex, 1);
    this.taskShare.saveLocal(this.taskList);}
  }

  updateFormDataIn(){
    if (this.router.url.includes('/edit')) {
      this.taskShare.taskListDataOut.emit(this.taskList);
    }
  }

  ngOnInit(): void {
    
  }



}
