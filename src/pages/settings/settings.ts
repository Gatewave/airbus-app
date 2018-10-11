import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LanguageProvider} from "../../providers/language/language";
import {TermsPage} from "../terms/terms";
import {HomePage} from "../home/home";


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public lang:LanguageProvider) {
  }

    changeLanguage(){
        this.lang.present();
    }

    terms(){
        this.navCtrl.setRoot(TermsPage);
  }
    backHome(){
        this.navCtrl.setRoot(HomePage)
    }
}
