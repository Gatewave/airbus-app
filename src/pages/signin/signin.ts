import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController,ModalController} from 'ionic-angular';
import {HomePage} from "../home/home";
import {ForgetpassPage} from "../forgetpass/forgetpass";
import {NewuserPage} from "../newuser/newuser";
import {User} from '../../Models/user';
import {AngularFireAuth} from 'angularfire2/auth'
import firebase from 'firebase';
// import {ProfilePage} from "../profile/profile";




@IonicPage()
@Component({
    selector: 'page-signin',
    templateUrl: 'signin.html',
})
export class SigninPage {
    user = {} as User;
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public loadingCtrl: LoadingController,
                public modalCtrl: ModalController,
                private afAuth : AngularFireAuth

    ) {

    }
    sign() {
        let loading = this.loadingCtrl.create({
            spinner: 'ios',
            content: 'جارى تحميل تسجيل الدخول',
            showBackdrop:true
        });

        loading.present();

        setTimeout(() => {
        }, 1000);

        setTimeout(() => {
            loading.dismiss();
        }, 3000);
        this.navCtrl.setRoot(HomePage);
    }

    async login(user:User) {
        try {
            const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
            if(result){
                this.navCtrl.setRoot(HomePage);
            }
        }
        catch (e) {
            console.error(e)
        }
    }


   async faceLogin(){
        try{
       const face = this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
       if(face){
           this.navCtrl.setRoot(HomePage);
             }
        }
        catch (e) {
            console.error(e);
        }
    }



    newuser(){
        this.navCtrl.push(NewuserPage);
    }


    forget(){
        this.navCtrl.push(ForgetpassPage);
    }


}
