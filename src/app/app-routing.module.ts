import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormComponent } from './create-form/form.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  {path: '', component: FormComponent},
  {path: 'edit/:id', component: UpdateFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }