import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams, Slides,ToastController} from 'ionic-angular';



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
              private alertCtrl: AlertController,
              public toastCtrl: ToastController
  ) {

  }
    HotelsMaka() {
        this.navCtrl.push('MakaHotelPage');
    }
    HotelsMadina() {
        this.navCtrl.push('MadinaHotelPage');
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
            type: 'text',
            value: 'الاسم :',
        });

        alert.addInput({
            type: 'tel',
            value: 'الهاتف :'
        });
        alert.addInput({
            type: 'mail',
            value: 'البريد الالكترونى :'
        });


        alert.addButton({
            text: 'أحجز',
            cssClass:'ion-button danger',
            handler: (data: any) => {
                this.testRadioResult = data;
                let toast = this.toastCtrl.create({
                    message: 'لقد قمت بالحجز شكرا',
                    duration: 6000,
                    position:'top'
                });
                // this.navCtrl.push('HomePage');
                toast.present(toast);
            }

        });

        alert.present();
    }


}
