import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

//import{BusinessloginPage} from '../businesslogin/businesslogin'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  slides = [
    {
      title: "Welcome to YASH",
      description: "a FUN & EASY way to get DISCOUNTS in selected stores.",
      image: "assets/imgs/yashgroupgoa.png",
    },
    {
      title: "Step 1",
      description: "Register & Login with your mobile number to get started",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Step 2",
      description: "Select a store to view or redeem points",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    ss(){
      this.navCtrl.setRoot('CustomerloginPage');
    }

}
