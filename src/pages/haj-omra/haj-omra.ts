import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the HajOmraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-haj-omra',
  templateUrl: 'haj-omra.html',
})
export class HajOmraPage {
    HajOmraList = [
        {
            title: "الحج الاقتصادى",
            description: "العرض مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/omrah-modal.jpg",
            price: " ١٠١٠ ج ",
        },
        {
            title: "الحج المميز",
            description: "العرض مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/omrah-modal.jpg",
            price: " ١٠١٠ ج ",
        },
        {
            title: "العمره الاقتصادى",
            description: "العرض مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/omrah-modal.jpg",
            price: " ١٠١٠ ج ",
        },
        {
            title: "عمره قبل المولد النبوى",
            description: "العرض مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/omrah-modal.jpg",
            price: " ١٠١٠ ج ",
        }
    ];

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {
  }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            refresher.complete();
        }, 2000);
    }

    packageDetails(){
      this.navCtrl.push('PackageDetailsPage');
    }
    backHome(){
        this.navCtrl.setRoot('HomePage')
    }

    filterItems(ev: any) {
        let val = ev.target.value;

        if (val && val.trim() !== '') {
            this.HajOmraList = this.HajOmraList.filter(function(HajOmraList) {
                return HajOmraList.title.includes(val.toLowerCase());
            });
        }
    }
}
