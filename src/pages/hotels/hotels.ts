import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams,Slides, LoadingController } from 'ionic-angular';

/**
 * Generated class for the HotelsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hotels',
  templateUrl: 'hotels.html',
})
export class HotelsPage {
    @ViewChild(Slides) slides: Slides;
    slidesList = [
        {
            title: "قم الان من خلال اير باص بالحجز بسهوله !",
            description: "<b>استمتع بسهوله الحجز<b/> من خلال تطبيقنا",
            image: "../../assets/imgs/02.png",
        },
        {
            title: "قم الان بادخال بيناتك",
            description: "أدخل بيناتك كامله ولا تنسى التاكيد شكرا",
            image: "../../assets/imgs/01.png",
        }
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
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
