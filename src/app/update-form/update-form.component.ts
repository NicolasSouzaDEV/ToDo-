import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Route, Router } from '@angular/router';
import { formInput } from '../interface/form-input';
import { TaskShareService } from '../task-share.service';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
})
export class UpdateFormComponent implements OnInit {
  taskList: formInput[] = [];

  taskNewObject: formInput;

  id: number = parseInt(this.route.snapshot.params['id']);

  constructor(
    private taskShare: TaskShareService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.taskShare.taskListDataOut.subscribe(
      (taskList: formInput[]) => (this.taskList = taskList)
    );
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) {
        this.id = parseInt(this.route.snapshot.params['id']);
        this.taskNewObject = this.taskList[this.id];
      }
    });
  }

  updateTask() {
    if (!Object.values(this.taskNewObject).every((value) => value !== '')) {
      alert('Preencha todos os campos');
    } else {
      this.taskShare.saveLocal(this.taskList);
    }
  }

  ngOnInit(): void {
    this.taskNewObject = this.taskList[this.id];
  }
}
