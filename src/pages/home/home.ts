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
      description: "A place for businesses to <b>Grow</b> & Clients to  <b>Multiply</b> with no hastle.",
      image: "assets/imgs/yashgroupgoa.png",
    },
    {
      title: "Step 1",
      description: "Login as a business associate to get started. <br><small><b>(You need to be registered through our website to login. If your not yet a member please follow the web link below to get yourself registered)</b></small>.<br><a href='http://www.yashgoa.com'>www.yashgoa.com</a>",
      image: "assets/img/ica-slidebox-img-2.png",
    },
    {
      title: "Step 2",
      description: "Once logged in as a business associate, <b>keep the customer login form opened to the customers</b> so, that they can get their bills verified",
      image: "assets/img/ica-slidebox-img-3.png",
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    ss(){
      this.navCtrl.setRoot('CustomerloginPage');
    }

}
