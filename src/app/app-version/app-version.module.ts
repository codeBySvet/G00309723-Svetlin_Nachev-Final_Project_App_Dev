import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppVersionPageRoutingModule } from './app-version-routing.module';

import { AppVersionPage } from './app-version.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppVersionPageRoutingModule
  ],
  declarations: [AppVersionPage]
})
export class AppVersionPageModule {}
