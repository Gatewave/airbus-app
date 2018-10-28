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
         this.photoViewer.show('http://www.airbustours.com:80/new//uploads/banner/20181011142042-2018-10-11banner142041.png');
    }
}
