import { UtilService } from "src/app/services/util.service";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-view-appointment",
  templateUrl: "./view-appointment.page.html",
  styleUrls: ["./view-appointment.page.scss"],
})
export class ViewAppointmentPage implements OnInit {
  public data: any = new Object();
  public state: number = 1;
  dataa: any = {};

  constructor(
    private util: UtilService,
    private api: ApiService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.api
      .getWithHeader(
        "showAppointment/" + localStorage.getItem("client-profile-id")
      )
      .subscribe(
        (success: any) => {
          console.log(success);
          this.dataa = success.data;
          this.selectStatus = success.data.payment_status;
        },
        (err) => {
          console.log(err, "er");
        }
      );
  }

  statusss;

  selectStatus: string = "";

  select(e) {
    console.log(e.detail.value);
    let data = {
      bookingId: this.dataa.id,
      status: e.detail.value,
    };
    this.api.postWithHeader("changeStatus", data).subscribe(
      (success: any) => {
        console.log("success", success);
        if (success.success) {
          this.util.success("Success !", "Status Hass Been Changed");
          /* this.navCtrl.navigateForward("tabs/clients"); */
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
  ionViewWillEnter() {
    this.data = this.util.dataTransfer;
  }

  public logScrolling(ev) {
    if (ev.detail.scrollTop >= 50) {
      this.state = 2;
    } else {
      this.state = 1;
    }
    console.log("this.state: ", this.state);
  }
}
