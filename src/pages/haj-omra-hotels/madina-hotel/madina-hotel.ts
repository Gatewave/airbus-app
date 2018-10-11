import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';

/**
 * Generated class for the MadinaHotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-madina-hotel',
  templateUrl: 'madina-hotel.html',
})
export class MadinaHotelPage {

    @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    ngAfterViewInit() {
        this.slides.autoplay = 2000;
        // this.slides.autoplayDisableOnInteraction = false;
        this.slides.pager = false;
        this.slides.paginationType ="progress";
        this.slides.dir = "_ltr"
    }

}
