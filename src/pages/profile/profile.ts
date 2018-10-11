import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import {Profile} from "../../Models/profile";
import {HomePage} from "../home/home";
import {Camera,CameraOptions} from "@ionic-native/camera";
import {storage} from "firebase";

@IonicPage()
@Component({
    selector: 'page-profile',
    templateUrl: 'profile.html',
})


export class ProfilePage {

    profile = {} as Profile;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private camera:Camera,
                private afDatabase : AngularFireDatabase,
                private afAuth : AngularFireAuth) {

    }

    createProfile() {
        this.afAuth.authState.take(1).subscribe(auth => {
            this.afDatabase.object(` profile/${auth.uid} `).set(this.profile)
                .then(() => this.navCtrl.setRoot(HomePage));
        })

    }





    async takePhoto(){
        try {
            const options: CameraOptions = {
                quality: 50,
                targetWidth: 600,
                targetHeight: 600,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation:true
            };
            const result = await this.camera.getPicture(options);
            const image = `data:image/jpeg;base64,${result}`;
            const pictures = storage().ref('pictures/myPhoto');
            pictures.putString(image, 'data_url')
        }
        catch (e){
            console.error(e);
        }
    }

}