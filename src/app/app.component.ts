import { Component, ViewChild } from '@angular/core';
import {MenuController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';

import { HomePage } from '../pages/home/home';
import {SigninPage} from "../pages/signin/signin";
import {LanguageProvider} from "../providers/language/language";
import {GalleryPage} from "../pages/gallery/gallery";
import {VideosPage} from "../pages/videos/videos";
import {CallPage} from "../pages/call/call";
import {AboutusPage} from "../pages/aboutus/aboutus";
import {SettingsPage} from "../pages/settings/settings";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) public nav: Nav;
  @ViewChild(Nav) public navCtrl: Nav;

  rootPage: any = SigninPage;
  pages: Array<{title: string, component: any , icon: string}>;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public translate: LanguageProvider,
              public camera: Camera,
              public menuCtrl: MenuController,
  ) {
    this.translate.setDefaultLanguage();
    this.initializeApp();
    this.pages = [
          { title: 'Page-A', component: HomePage , icon:"ios-home"},
          { title: 'Page-B', component: GalleryPage, icon:"md-images"},
          { title: 'Page-C', component: VideosPage, icon:"md-videocam"},
          { title: 'Page-D', component: CallPage, icon:"logo-whatsapp"},
          { title: 'Page-E', component:  AboutusPage, icon:"md-information-circle"},
          { title: 'Page-F', component:  SettingsPage, icon:"md-cog"},
      ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.show();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

//To Logout From the App
   public signin(){
       this.navCtrl.setRoot(SigninPage);
       this.menuCtrl.close();
   }

}
