import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import { Ionic2RatingModule } from "ionic2-rating";
// import event = google.maps.event;


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

  constructor(public navCtrl: NavController, public navParams: NavParams, public rating:Ionic2RatingModule) {
  }

    ngAfterViewInit() {
        this.slides.autoplay = 2000;
        // this.slides.autoplayDisableOnInteraction = false;
        this.slides.pager = false;
        this.slides.paginationType ="progress";
        this.slides.dir = "_ltr"
    }
    changeRating(event)
    {
        this.rating=event.value;

    }
}
