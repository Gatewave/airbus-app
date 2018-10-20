import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimationService, AnimationBuilder } from 'css-animator';





@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {
    @ViewChild('myElement') myElem;

    private animator: AnimationBuilder;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,animationService: AnimationService,


  ) {
      this.animator = animationService.builder();
  }
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            refresher.complete();
        }, 2000);
    }

    animateElem() {
        this.animator.setType('pulse').show(this.myElem.nativeElement);
    }

    openIt(){
      this.navCtrl.push('GalleryDetailsPage')
    }

    backHome(){
        this.navCtrl.setRoot('HomePage')
    }
}
