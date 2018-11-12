import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  pages:Array<{title:string, Component:any, module?:any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
this.initializeApp();
    //platform.ready().then(() => {
      
      //statusBar.styleDefault();
      //splashScreen.hide();
   // });
  }
  initializeApp(){
    this.platform.ready().then(()=>{
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openCustomPage(name){
    console.log(name)
    this.nav.push(name)
  }
}

