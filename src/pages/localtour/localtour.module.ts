import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocaltourPage } from './localtour';

@NgModule({
  declarations: [
    LocaltourPage,
  ],
  imports: [
    IonicPageModule.forChild(LocaltourPage),
  ],
})
export class LocaltourPageModule {}
