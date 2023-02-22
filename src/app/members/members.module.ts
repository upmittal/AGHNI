import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    FormsModule
  ]
})
export class MembersModule { }
