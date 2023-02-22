import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { confirmationComponent } from './confirmaition/confirmation.component';

const routes: Routes = [
  {
    path:'members/home',
    component: HomeComponent
},
{
  path: 'members/create',
  component:CreateComponent,
},
{
  path:'members/edit/:id',
  component: EditComponent
},
{
  path:'members/confirmation/:id',
  component: confirmationComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
