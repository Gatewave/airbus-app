webpackJsonp([17],{

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(758);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(365);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: function (http) {
                            return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
                        },
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_language_language__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var HomePage = /** @class */ (function () {
    // profileData:FirebaseObjectObservable<Profile>
    function HomePage(navCtrl, navParams, lang, called, afAuth, toast, popoverCtrl, platform) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lang = lang;
        this.called = called;
        this.afAuth = afAuth;
        this.toast = toast;
        this.popoverCtrl = popoverCtrl;
        this.platform = platform;
    }
    HomePage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (data) {
            if (data && data.email && data.uid) {
                _this.toast.create({
                    message: "Welcome , " + data.email,
                    duration: 3000
                }).present();
                // this.profileData = this.afDatabase.object(`profile/${data.uid}`)
            }
            else {
                _this.toast.create({
                    message: "Wrong Authentication",
                    duration: 3000
                }).present();
            }
        });
    };
    // Function To call Air Bus Number
    HomePage.prototype.call = function () {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.platform.ready()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.called.callNumber("18001010101", true)];
                    case 3:
                        _a.sent();
                        console.log('Launched dialer!');
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.log(e_1 || 'Error launching dialer');
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.ngAfterViewInit = function () {
        this.slides.autoplay = 2000;
        // this.slides.autoplayDisableOnInteraction = false;
        this.slides.pager = true;
        this.slides.paginationType = "progress";
        this.slides.dir = "_ltr";
    };
    HomePage.prototype.changeLanguage = function () {
        this.lang.present();
    };
    //page jump
    HomePage.prototype.haj = function () {
        this.navCtrl.setRoot('HajOmraPage');
    };
    HomePage.prototype.localtour = function () {
        this.navCtrl.setRoot('LocaltourPage');
    };
    HomePage.prototype.interntour = function () {
        this.navCtrl.setRoot('InterntourPage');
    };
    HomePage.prototype.transportaion = function () {
        this.navCtrl.setRoot('TransportaionPage');
    };
    HomePage.prototype.tickets = function () {
        this.navCtrl.setRoot('TicketsPage');
    };
    HomePage.prototype.hotels = function () {
        this.navCtrl.setRoot('HotelsPage');
    };
    HomePage.prototype.presentRadioPopover = function (ev) {
        var popover = this.popoverCtrl.create('ProfilePage', {}, { cssClass: 'hamada' });
        popover.present({
            ev: ev
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle >\n      <ion-icon ios="ios-menu" name="menu"></ion-icon>\n    </button>\n\n    <ion-title text-center> {{ \'main.title\' | translate }} </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentRadioPopover($event) ">\n        <ion-icon name="ios-contact"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <!--<ion-buttons end>-->\n      <!--<button ion-button icon-only (click)="changeLanguage()">-->\n        <!--<ion-icon ios="ios-globe" name="md-globe"></ion-icon>-->\n      <!--</button>-->\n    <!--</ion-buttons>-->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-row>\n    <ion-slides #slides dir="rtl" [pager]="true" loop="true" onload="startAutoplay()" style="background-color: black">\n      <ion-slide *ngFor="let image of [1,2,3,4,5]">\n        <img height="50%" data-src="../assets/imgs/slide{{image}}.jpg">\n      </ion-slide>\n    </ion-slides>\n  </ion-row>\n\n  <ion-row id="grid_menu">\n    <ion-col col-4>\n      <ion-card (click)="haj()">\n        <ion-icon   ios="ios-globe" md="md-globe"></ion-icon>\n        <div class="card-title"> {{ \'main.tabs.haj\' | translate }} </div>\n      </ion-card>\n    </ion-col>\n\n\n    <ion-col col-4>\n      <ion-card (click)="localtour()">\n        <ion-icon ios="ios-plane" md="md-plane"></ion-icon>\n        <div class="card-title"> {{ \'main.tabs.localtour\' | translate }} </div>\n      </ion-card>\n    </ion-col>\n\n\n    <ion-col col-4>\n      <ion-card (click)="interntour()">\n        <ion-icon ios="ios-planet" md="md-planet"></ion-icon>\n        <div class="card-title"> {{ \'main.tabs.interntour\' | translate }} </div>\n      </ion-card>\n    </ion-col>\n\n\n\n    <ion-col col-4>\n      <ion-card (click)="transportaion()">\n        <ion-icon ios="ios-bus" md="md-bus"></ion-icon>\n        <div class="card-title"> {{ \'main.tabs.transportation\' | translate }} </div>\n      </ion-card>\n    </ion-col>\n\n\n\n    <ion-col col-4>\n      <ion-card (click)="tickets()">\n        <ion-icon ios="ios-paper" md="md-paper"></ion-icon>\n        <div class="card-title"> {{ \'main.tabs.tickets\' | translate }} </div>\n      </ion-card>\n    </ion-col>\n\n\n\n    <ion-col col-4>\n      <ion-card (click)="hotels()">\n        <ion-icon ios="ios-home" md="md-home"></ion-icon>\n        <div class="card-title"> {{ \'main.tabs.hotels\' | translate }} </div>\n      </ion-card>\n    </ion-col>\n\n    <ion-col col-12 margin-top>\n      <div align-self-center id="news">\n\n        <p>\n          <span>{{ \'main.news\' | translate }}</span>\n          <marquee  direction="right" scrolldelay="130">{{ \'main.news-details\' | translate }}</marquee>\n        </p>\n      </div>\n      <!--<p>user : {{(profileData | async)?.username}}</p>-->\n      <!--<p>user: {{(profileData | async)?.firstName}}</p>-->\n      <!--<p>user: {{(profileData | async)?.lastName}}</p>-->\n    </ion-col>\n\n  </ion-row>\n</ion-content>\n\n<ion-footer>\n  <ion-fab right bottom>\n    <button ion-fab  (click)="call()" color="light">\n      <ion-icon color="danger" name="md-call"></ion-icon></button>\n  </ion-fab>\n</ion-footer>'/*ion-inline-end:"/home/mondo/Web/Air_bus_mobApp/AirBus/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_language_language__["a" /* LanguageProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_call_number__["a" /* CallNumber */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* PopoverController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=17.js.map