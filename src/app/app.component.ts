import { Component, QueryList, ViewChildren } from "@angular/core";
import { Platform, IonRouterOutlet } from "@ionic/angular";
import { Router } from "@angular/router";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { ApiService } from "./services/api.service";
import { UtilService } from "./services/util.service";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  public selectedIndex = 0;
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  constructor(
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private api: ApiService,
    private util: UtilService,
    private oneSignal: OneSignal,
    private translate:TranslateService
  ) {
    this.initializeApp();
    this.backButtonEvent();

    if (localStorage.getItem("lan")) {
      this.translate.setDefaultLang(localStorage.getItem("lan"));
      } else {
      this.translate.setDefaultLang("en");
      localStorage.setItem("lan", "en");
      }
  }

  initializeApp() {
    console.log('ready');
    this.platform.ready().then(() => {
      setTimeout(() => this.splashScreen.hide(), 2000);
    });
    this.api.get("appSetting").subscribe(
      (res: any) => {
        if (res.success) {
          console.log("res.setting", res);
          this.oneSignal.startInit(res.data.app_id, res.data.project_no);
          // this.oneSignal.startInit(res.data.owner_app_id, res.data.owner_project_no);
          this.oneSignal.getIds().then((token) => {
            localStorage.setItem("pushToken", token.userId);
          });
          this.oneSignal.endInit();
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }


  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
      this.routerOutlets.forEach((outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (
          this.router.url === "/tabs/calendar" ||
          this.router.url === "/tabs/sales" ||
          this.router.url === "/tabs/clients" ||
          this.router.url === "/tabs/notification" ||
          this.router.url === "/tabs/more" ||
          this.router.url === "/signin" ||
          this.router.url === "signin" ||
          this.router.url === "/subscription" ||
          this.router.url === "subscription"
        ) {
          if (
            new Date().getTime() - this.lastTimeBackPress <
            this.timePeriodToExit
          ) {
            navigator["app"].exitApp();
          } else {
            this.util.showToast("press back again to exit App.");
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });
  }
}
