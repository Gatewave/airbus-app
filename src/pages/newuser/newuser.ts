import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams, ToastController} from 'ionic-angular';
import {SigninPage} from '../signin/signin';
// import { HomePage } from '../home/home';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {Profile} from "../../Models/profile";
import {User} from "../../Models/user";


@IonicPage()
@Component({
    selector: 'page-newuser',
    templateUrl: 'newuser.html',
})
export class NewuserPage {

    user = {} as User;
    profile = {} as Profile;
    url = '';

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public loadingCtrl: LoadingController,
                public toastCtrl: ToastController,
                private afAuth : AngularFireAuth,
                private afDatabase : AngularFireDatabase
    ) {
    }
    readUrl(event:any) {
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();

            reader.onload = (event: ProgressEvent) => {
                this.url = (<FileReader>event.target).result;
            };

            reader.readAsDataURL(event.target.files[0]);
        }
    }

    // signup(position:string) {
    //     let toast = this.toastCtrl.create({
    //         message: 'لقد قمت بانشاء حساب جديد',
    //         duration: 4000,
    //         position: position
    //     });
    //     toast.present(toast);
    //     this.navCtrl.setRoot(SigninPage);
    // }


    async register(user:User) {
        let toast = this.toastCtrl.create({
            message: 'لقد قمت بانشاء حساب جديد',
            duration: 4000,
        });
        toast.present(toast);
        try {
            const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
            console.error(result);
            this.afAuth.authState.take(1).subscribe(auth => {
                this.afDatabase.object(` profile/${auth.uid} `).set(this.profile)
                    .then(() => this.navCtrl.setRoot(SigninPage));
            })

        }
        catch (e) {
            console.error(e);
        }
    }
}
