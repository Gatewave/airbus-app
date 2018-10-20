import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-localtour',
  templateUrl: 'localtour.html',
})
export class LocaltourPage {
    LocalCardList = [
        {
            title: "ايكوتيل دهب",
            description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/dahab.jpg",
        },
        {
            title: "منتجع كانكون",
            description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/kanon.jpg",
        },
        {
            title: "سيزار بالاس",
            description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/sizarbalace.jpg",
        },
        {
            title: "باروتيل اكوا برك",
            description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/akowapark.jpg",
        }
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

    backHome(){
      this.navCtrl.setRoot('HomePage')
    }

    filterItems(ev: any) {
        let val = ev.target.value;

        if (val && val.trim() !== '') {
            this.LocalCardList = this.LocalCardList.filter(function(LocalCardList) {
                return LocalCardList.title.includes(val.toLowerCase());
            });
        }
    }
}
