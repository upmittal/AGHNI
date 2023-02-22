import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { confirmationComponent } from './confirmaition/confirmation.component';
import { QRCodeSVGModule } from 'ngx-qrcode-svg'

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    EditComponent,
    confirmationComponent
  ],
  imports: [
    CommonModule,
    MembersRoutingModule,
    FormsModule,
    NgxQRCodeModule,
    QRCodeSVGModule
  ]
})
export class MembersModule { }
