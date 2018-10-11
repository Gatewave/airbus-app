import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {SigninPage} from "../signin/signin";

/**
 * Generated class for the ForgetpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgetpass',
  templateUrl: 'forgetpass.html',
})
export class ForgetpassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public loadingCtrl: LoadingController) {
  }
    sign() {
        let loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'جارى ارسال كلمة السر...',
        });

        loading.present();

        setTimeout(() => {
        }, 1000);

        setTimeout(() => {
            loading.dismiss();
        }, 3000);
        this.navCtrl.push(SigninPage);
    }

}
