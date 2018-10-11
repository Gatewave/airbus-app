import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Slides} from 'ionic-angular';
import {MadinaHotelPage} from "../haj-omra-hotels/madina-hotel/madina-hotel";
import {MakaHotelPage} from "../haj-omra-hotels/maka-hotel/maka-hotel";


@IonicPage()
@Component({
  selector: 'page-package-details',
  templateUrl: 'package-details.html',
})

export class PackageDetailsPage {
    Hotels_maka = [
        {
            title: "فندق مكه",
            description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/omrah-modal.jpg",
            location: "../../assets/imgs/omrah-modal.jpg"
        }
    ];
    Hotels_madina =[
        {
            title: "فندق المدينه",
            description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/omrah-modal.jpg",
            location: "../../assets/imgs/omrah-modal.jpg"

        }
    ];

    reserve: string = "partA";
    testRadioOpen = false;
    testRadioResult: any;
    @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController) {

  }
    HotelsMaka() {
        this.navCtrl.push(MakaHotelPage);
    }
    HotelsMadina() {
        this.navCtrl.push(MadinaHotelPage);
    }


    ngAfterViewInit() {
        this.slides.autoplay = 2000;
        // this.slides.autoplayDisableOnInteraction = false;
        this.slides.pager = false;
        this.slides.paginationType ="progress";
        this.slides.dir = "_ltr"
    }

    doRadio() {
        let alert = this.alertCtrl.create();
        alert.setTitle('بيانات الحجز');

        alert.addInput({
            type: 'radio',
            label: 'احجز لنفس بينات الحساب',
            value: 'blue',
            checked: true
        });

        alert.addInput({
            type: 'radio',
            label: 'احجز لبينات حساب اخر',
            value: 'green'
        });


        // alert.addButton('Cancel');
        alert.addButton({
            text: 'التالى',
            cssClass:'ion-button',
            handler: (data: any) => {
                console.log('Radio data:', data);
                this.testRadioOpen = false;
                this.testRadioResult = data;
            }
        });

        alert.present();
    }


}
