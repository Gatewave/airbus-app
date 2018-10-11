import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AnimationService, AnimationBuilder } from 'css-animator';
import { PhotoViewer } from '@ionic-native/photo-viewer';
import {HomePage} from "../home/home";





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
              private photoViewer: PhotoViewer

  ) {
      this.animator = animationService.builder();
  }


    animateElem() {
        this.animator.setType('pulse').show(this.myElem.nativeElement);
    }
    openIt(){
        this.photoViewer.show('../assets/imgs/slide2.jpg');
    }
    backHome(){
        this.navCtrl.setRoot(HomePage)
    }
}
