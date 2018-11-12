import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerRegPage } from './customer-reg';

@NgModule({
  declarations: [
    CustomerRegPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerRegPage),
  ],
})
export class CustomerRegPageModule {}
