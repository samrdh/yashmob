import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,MenuController  } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-customer-dashboard',
  templateUrl: 'customer-dashboard.html',
})
export class CustomerDashboardPage {
  shop:any;
  
  slides = [
    {
      //title: "Welcome to YASH",
      //description: "A place for businesses to <b>Grow</b> & Clients to  <b>Multiply</b> with no hastle.",
      image: "assets/imgs/diwali_offer.jpg",
    },
    {
      //title: "Step 1",
      //description: "Login as a business associate to get started. <br><small><b>(You need to be registered through our website to login. If your not yet a member please follow the web link below to get yourself registered)</b></small>.<br><a href='http://www.yashgoa.com'>www.yashgoa.com</a>",
      image: "assets/imgs/diwali_offer.jpg",
    },
    {
      //title: "Step 2",
      //description: "Once logged in as a business associate, <b>keep the customer login form opened to the customers</b> so, that they can get their bills verified",
      image: "assets/imgs/diwali_offer.jpg",
    }
  ];



  constructor(public navCtrl: NavController, public navParams: NavParams,menu: MenuController) {
    menu.enable(true);
  this.shop=[
    {name:"Geeta automation technologies",id:"1"},{name:"samrdh",id:"2"},{name:"yash",id:"3"},{name:"mk",id:"4"}
  ]

  }



}
