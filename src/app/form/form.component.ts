import { Component, OnInit } from '@angular/core';
import { formInput } from '../interface/form-input';
import { TaskShareService } from './task-share.service';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formInput: formInput = {
    name: "",
    desc: "",
    date: "",
    check: false
  }

  taskList: {}[] = []
  

  addTask(){
    if (!Object.values(this.formInput).every(value => value !== "")){
      alert("Preencha todos os campos")} else {
      
      this.taskList.push({...this.formInput});
      localStorage.setItem('taskList', JSON.stringify(this.taskList))
      this.taskShare.taskShareEvent.emit(this.taskList)
    }
  }

  constructor(private taskShare: TaskShareService) {
  }

  ngOnInit(): void {
    let saveTaskList = localStorage.getItem("taskList")
    if (saveTaskList == null) {
      console.log("Nenhum save encontrado")
    } else {this.taskList = JSON.parse(saveTaskList);
    this.taskShare.taskShareEvent.emit(this.taskList)}
  }

}
