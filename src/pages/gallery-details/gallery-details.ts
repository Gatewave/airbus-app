import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PhotoViewer} from "@ionic-native/photo-viewer";

/**
 * Generated class for the GalleryDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery-details',
  templateUrl: 'gallery-details.html',
})
export class GalleryDetailsPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private photoViewer: PhotoViewer) {
  }
    openIt(){
         this.photoViewer.show('./../../assets/imgs/trip_gallery_cover_.jpg');
    }
}
