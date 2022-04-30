import { UtilService } from "./../../services/util.service";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { AnySrvRecord } from "dns";
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: "app-setting",
  templateUrl: "./setting.page.html",
  styleUrls: ["./setting.page.scss"],
})
export class SettingPage implements OnInit {
  public theme: boolean = localStorage.getItem("theme") == "dark";
  public calenderMode: string = localStorage.getItem("calenderMode")
    ? localStorage.getItem("calenderMode")
    : "week";
  mailnotification: any;
  pushnotification: any;

  constructor(private util: UtilService, private api: ApiService,private translate:TranslateService) {
    this.translate.get("setting.language").subscribe((data: any) => {
      this.option.header = data;
    })
  }

  option: any = {
    header: 'Language',
  }
  language: any = "en";

  changeLan() {
    this.translate.setDefaultLang(this.language);
    localStorage.setItem('lan', this.language);
  }

  data:any;
  ngOnInit() {
    this.language = localStorage.getItem('lan');
    this.api.getWithHeader("showSalon").subscribe(
      (res: any) => {
        console.log("res: ", res);
        if (res.success) {
          this.data = res.data;
          this.mailnotification = res.data.ownerDetails.notification;
          this.pushnotification = res.data.ownerDetails.mail;
          console.log("noti", this.mailnotification);
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  public onLogOut() {
    localStorage.removeItem("admin_token");
    this.util.navCtrl.navigateForward("signin");
  }

  changeLanguage(event){
    console.log(event.detail.value)
  } 
  helo() {
    console.log("yess");
    if (this.data.ownerDetails.mail == 1) {
      let data = {
        mail: 0,
      };
      this.api.postWithHeader("mail", data).subscribe(
        (success: any) => {
          console.log("succes", success);
          if (success.success) {
            this.util.success("Success !", "Setting Updated");
          }
        },
        (err) => {
          console.log("err", err);
        }
      );
    } else {
      let data = {
        mail: 1,
      };
      this.api.postWithHeader("mail", data).subscribe(
        (success: any) => {
          console.log("succes", success);
          if (success.success) {
            this.util.success("Success !", "Setting Updated");
          }
        },
        (err) => {
          console.log("err", err);
        }
      );
    }
  }

  push() {
    if(this.data.ownerDetails.notification == 1){
      let data = {
        notification: 0,
      };
      this.api.postWithHeader("notification", data).subscribe(
        (success: any) => {
          console.log("succes", success);
          if (success.success) {
            this.util.success("Success !", "Setting Updated");
          }
        },
        (err) => {
          console.log("err", err);
        }
      );
    }
    else{
      let data = {
      notification: 1,
    };
    this.api.postWithHeader("notification", data).subscribe(
      (success: any) => {
        console.log("succes", success);
        if (success.success) {
          this.util.success("Success !", "Setting Updated");
        }
      },
      (err) => {
        console.log("err", err);
      }
    );

    }
  }


  changeTheme(event) {
    if (event.detail.checked) {
      localStorage.setItem("theme", "dark");
      document.body.setAttribute("data-theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
      document.body.setAttribute("data-theme", "light");
    }
  }

  changeCalender(event) {
    localStorage.setItem("calenderMode", event.detail.value);
  }
}
