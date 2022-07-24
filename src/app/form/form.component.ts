import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formInput: any = {
    name: "",
    desc: "",
    date: "",
    check: false

  }

  taskList: any[] = []

  addTask(){
    if (!Object.values(this.formInput).every(value => value !== "")){
      alert("Preencha todos os campos")} else {
      
      this.taskList.push({...this.formInput});
      localStorage.setItem('taskList', JSON.stringify(this.taskList))
    }
  }

  constructor() { }

  ngOnInit(): void {
    let saveTaskList = localStorage.getItem("taskList")
    if (saveTaskList == null) {
      console.log("Nenhum save encontrado")
    } else {this.taskList = JSON.parse(saveTaskList)}
  }

}
