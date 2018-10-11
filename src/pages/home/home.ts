import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Slides, ToastController} from 'ionic-angular';
import {LanguageProvider} from "../../providers/language/language";
import 'rxjs/add/operator/map';
import {HajOmraPage} from "../haj-omra/haj-omra";
import {LocaltourPage} from "../localtour/localtour";
import {InterntourPage} from "../interntour/interntour";
import {TransportaionPage} from "../transportaion/transportaion";
import {TicketsPage} from "../tickets/tickets";
import {HotelsPage} from "../hotels/hotels";
import { CallNumber } from '@ionic-native/call-number';
import {AngularFireAuth} from 'angularfire2/auth';
import {ProfilePage} from "../profile/profile";
import { PopoverController } from 'ionic-angular';





@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
})

export class HomePage {

    @ViewChild(Slides) slides: Slides;

    // profileData:FirebaseObjectObservable<Profile>

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public lang:LanguageProvider,
                private callNumber: CallNumber,
                private afAuth : AngularFireAuth,
                public toast: ToastController,
                public popoverCtrl: PopoverController
    ) {

    }

    ionViewWillLoad(){
        this.afAuth.authState.subscribe(data => {
            if (data && data.email && data.uid){
                this.toast.create({
                    message:`Welcome , ${data.email}`,
                    duration:3000
                }).present();
                // this.profileData = this.afDatabase.object(`profile/${data.uid}`)

            } else {
                this.toast.create({
                    message:`Wrong Authentication`,
                    duration:3000
                }).present();
            }
        })
    }

// Function To call Air Bus Number
    call(){
        this.callNumber.callNumber("18001010101", true)
            .then(res => console.log('Launched dialer!', res))
            .catch(err => console.log('Error launching dialer', err));
    }


    ngAfterViewInit() {
        this.slides.autoplay = 2000;
        // this.slides.autoplayDisableOnInteraction = false;
        this.slides.pager = true;
        this.slides.paginationType ="progress";
        this.slides.dir = "_ltr"
    }
    changeLanguage(){
        this.lang.present();
    }



    //page jump
    haj(){
        this.navCtrl.setRoot(HajOmraPage);
    }
    localtour(){
        this.navCtrl.setRoot(LocaltourPage);
    }
    interntour(){
        this.navCtrl.setRoot(InterntourPage);
    }
    transportaion(){
        this.navCtrl.setRoot(TransportaionPage);
    }
    tickets(){
        this.navCtrl.setRoot(TicketsPage);
    }
    hotels(){
        this.navCtrl.setRoot(HotelsPage);
    }
    presentPopover(myEvent){
        let popover = this.popoverCtrl.create(ProfilePage);
        popover.present({
            ev: myEvent
        })
    }


}
