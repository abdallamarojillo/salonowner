import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddClientsPageRoutingModule } from './add-clients-routing.module';

import { AddClientsPage } from './add-clients.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddClientsPageRoutingModule,
    TranslateModule
  ],
  declarations: [AddClientsPage]
})
export class AddClientsPageModule {}
