import { Component, OnInit } from '@angular/core';
import { formInput } from '../interface/form-input';
import { TaskShareService } from '../task-share.service';

@Component({
  selector: 'app-create-form',
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

  taskList: formInput[] = []

  constructor(private taskShare: TaskShareService) {
  }

  addTask(){
    if (!Object.values(this.formInput).every(value => value !== "")){
      alert("Preencha todos os campos")} else {
      this.taskList.push({...this.formInput});
      this.taskShare.saveLocal(this.taskList)
      this.taskShare.taskListDataIn.emit(this.taskList)
    }
  }

  ngOnInit(): void {
    let saveTaskList = this.taskShare.getLocal()
    if (saveTaskList == null) {
      console.log("Nenhum save encontrado")
    } else {
      this.taskList = saveTaskList
    this.taskShare.taskListDataIn.emit(this.taskList)
  }
    
  }

}
