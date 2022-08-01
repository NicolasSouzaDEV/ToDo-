import { EventEmitter, Injectable } from '@angular/core';
import { formInput } from './interface/form-input';

@Injectable({
  providedIn: 'root'
})
export class TaskShareService {

  taskListDataIn = new EventEmitter<formInput[]>;
  taskListDataOut = new EventEmitter<formInput[]>;

  constructor(){}

  saveLocal(taskList: formInput[]):void{
    localStorage.setItem('taskList', JSON.stringify(taskList))
  }

  getLocal():formInput[]{
    return JSON.parse(localStorage.getItem("taskList"))
  }
}
