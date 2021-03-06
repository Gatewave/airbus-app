import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-videos',
  templateUrl: 'videos.html',
})
export class VideosPage {

    public tap: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideosPage');
  }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            refresher.complete();
        }, 2000);
    }
    tapEvent(e) {
        this.tap++
    }
    backHome(){
        this.navCtrl.setRoot('HomePage')
    }

}
