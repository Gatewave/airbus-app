import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";

/**
 * Generated class for the InterntourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interntour',
  templateUrl: 'interntour.html',
})
export class InterntourPage {
    InternCardList = [
        {
            title: "جيمس الحمرا",
            description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/sizarbalace.jpg",
        },
        {
            title: "جزيرة بينانج و كوالا",
            description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/binag.jpg",
        },
        {
            title: "بلازا بيروت",
            description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/blaza-birot.jpg",
        },
        {
            title: "كوالا",
            description: "فندق مميز جدا و به مناظر جذابه و يقع فى موقع مميز جدا",
            image: "../../assets/imgs/kola.jpg",
        }
    ];


    constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

    backHome(){
        this.navCtrl.setRoot(HomePage)
    }


    filterItems(ev: any) {
        let val = ev.target.value;

        if (val && val.trim() !== '') {
            this.InternCardList = this.InternCardList.filter(function(InternCardList) {
                return InternCardList.title.includes(val.toLowerCase());
            });
        }
    }
}
