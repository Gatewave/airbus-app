import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Slides, ToastController} from 'ionic-angular';
import {LanguageProvider} from "../../providers/language/language";
import 'rxjs/add/operator/map';
import { CallNumber } from '@ionic-native/call-number';
import {AngularFireAuth} from 'angularfire2/auth';
import { PopoverController, Platform } from 'ionic-angular';




@IonicPage()
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
                private called: CallNumber,
                private afAuth : AngularFireAuth,
                public toast: ToastController,
                public popoverCtrl: PopoverController,
                public platform: Platform,
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
    async call() {
        await this.platform.ready();
        try {
            await this.called.callNumber("18001010101", true)
            console.log('Launched dialer!');
        }
        catch (e) {
            console.log(e || 'Error launching dialer');
        }
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
        this.navCtrl.setRoot('HajOmraPage');
    }
    localtour(){
        this.navCtrl.setRoot('LocaltourPage');
    }
    interntour(){
        this.navCtrl.setRoot('InterntourPage');
    }
    transportaion(){
        this.navCtrl.setRoot('TransportaionPage');
    }
    tickets(){
        this.navCtrl.setRoot('TicketsPage');
    }
    hotels(){
        this.navCtrl.setRoot('HotelsPage');
    }

    presentRadioPopover(ev: UIEvent) {
        let popover = this.popoverCtrl.create('ProfilePage', {},{cssClass: 'hamada'});
        popover.present({
            ev: ev
        });
    }
}