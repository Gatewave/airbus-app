import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';





@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
    @ViewChild('myElement') myElem;

  constructor(public navCtrl: NavController,
              public navParams: NavParams

  ) {

  }
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            refresher.complete();
        }, 2000);
    }


    openIt(){
      this.navCtrl.push('GalleryDetailsPage')
    }

    backHome(){
        this.navCtrl.setRoot('HomePage')
    }
}
