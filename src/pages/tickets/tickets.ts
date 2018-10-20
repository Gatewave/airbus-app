import {Component, ViewChild} from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams,Slides} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {
    @ViewChild(Slides) slides: Slides;
    slidesList = [
        {
            title: "خلال اير باص احجز تذاكر الطيران !",
            description: "<b>استمتع بسهوله الحجز<b/> من خلال تطبيقنا",
            image: "../../assets/imgs/ticket.png",
        },
        {
            title: "تمتع بالسفر حول العالم..",
            description: "أدخل بيناتك كامله ولا تنسى التاكيد شكرا",
            image: "../../assets/imgs/03.png",
        }
    ];


    constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController
              ) {
  }
    goToSlide() {
        this.slides.slideNext(500, true);
    }
    slideChanged(){
        this.slides.slidePrev(500, true);
    }
    backHome(){
        this.navCtrl.setRoot('HomePage')
    }

    presentLoading() {
        const loader = this.loadingCtrl.create({
            content: "جارى حفظ الحجز",
            duration: 3000
        });
        loader.present();
        this.navCtrl.setRoot('HomePage')
    }
}
