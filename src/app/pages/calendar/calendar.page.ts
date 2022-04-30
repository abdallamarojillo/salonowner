import { UtilService } from "src/app/services/util.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

import * as moment from "moment";
import {
  CalendarComponentOptions,
  CalendarModal,
  CalendarResult,
  CalendarModalOptions,
  CalendarComponent,
} from "ion2-calendar";
import { ModalController, NavController } from "@ionic/angular";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.page.html",
  styleUrls: ["./calendar.page.scss"],
})
export class CalendarPage implements OnInit {
  
  isFav: any = true;
  public staff: any = new Array();
  public eventSource = [];
  public viewTitle;
  public isToday: boolean;
  public selectedEmp: any;
  

  public optionsRange: CalendarComponentOptions = {
    pickMode: "range",
    showToggleButtons: true,
  };
  
  public bookingData: any = [];
  id: any;
  calendar:any = {
    mode: localStorage.getItem("calenderMode")
      ? localStorage.getItem("calenderMode")
      : "week",
    currentDate: new Date(),
    dateFormatter: {
      formatMonthViewDay: function (date: Date) {
        return date.getDate().toString();
      },
      formatMonthViewDayHeader: function (date: Date) {
        return "MonMH";
      },
      formatMonthViewTitle: function (date: Date) {
        return "testMT";
      },
      formatWeekViewDayHeader: function (date: Date) {
        return "MonWH";
      },
      formatWeekViewTitle: function (date: Date) {
        return "testWT";
      },
      formatWeekViewHourColumn: function (date: Date) {
        return "testWH";
      },
      formatDayViewHourColumn: function (date: Date) {
        return "testDH";
      },
      formatDayViewTitle: function (date: Date) {
        return "testDT";
      },
    },
  };
  constructor(
    private util: UtilService,
    private api: ApiService,
    private modalController: ModalController,
    private navCtrl: NavController
  ) {
    this.getStaff(null);

    this.api.getWithHeader("employees").subscribe(
      (success: any) => {
        console.log("success", success);
        this.staff = success.data;
        this.api.newLogin.next(true);
      },
      (error) => {
        console.log("error", error);
      }
    );

    if(localStorage.getItem('message') == 'no'){
      this.util.navCtrl.navigateForward('/signin');
    }


    this.api.getWithHeader("appointments").subscribe((res: any) => {
      if (res.data && res.data.length != 0) {
        res.data.forEach((element) => {
          let date = "";
          let start_time = moment(element.date + " " + element.start_time).format(
            "YYYY-MM-DD HH:mm"
          );
          date = moment(element.date + " " + element.start_time).format("YYYY-MM-DD");
            let end_time = moment(element.date + " " + element.end_time).format(
              "YYYY-MM-DD HH:mm"
            );
          this.eventSource.push({
            title: element.booking_id,
            startTime: new Date(start_time),
            endTime: new Date(end_time),
            allDay:false,
            appointmentDetail:element
          });
        });
      }
      this.calendar.eventSource = this.eventSource
    });  
  }
  

  ngOnInit() {
    this.eventSource = [];
  }


  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    console.log(event);
    localStorage.setItem('client-profile-id',event.appointmentDetail.id)
    this.util.dataTransfer = event.appointmentDetail;
    this.util.navCtrl.navigateForward("viewAppointment");
  }

  today() {
    this.calendar.currentDate = new Date();
  }


  onTimeSelected(ev) {}

  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }
  employee(emp) {
    console.log("emp", emp);
    this.id = emp.emp_id;
    this.util.id = this.id;
    console.log("this.id", this.id);
    this.navCtrl.navigateForward("employee-detail");
  }

  public async presentCalendarPicker() {
    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();
    let currentDay = new Date().getDay();
    const options: CalendarModalOptions = {
      from: new Date(currentYear - 5, 0, 1),
      to: new Date(currentYear + 5, 11.1),
      defaultScrollTo: new Date(currentYear, currentMonth, currentDay),
    };
    const modal = await this.modalController.create({
      component: CalendarModal,
      componentProps: { options },
      cssClass: "my-custom-class",
    });
    modal.onDidDismiss().then((data) => {
      const date: CalendarResult = data.data;
      if (date != null) {
        this.calendar.currentDate = date.dateObj;
      }
    });
    return await modal.present();
  }

  public getStaff(event): void {
    this.api.getWithHeader("employees").subscribe((res: any) => {
      if (res.success) {
        this.staff = res.data;
        if (this.staff && this.staff.length != 0) {
          this.selectedEmp = this.staff[0].id;
          if (event != null) {
            event.target.complete();
          }
        }
      }
    });
  }
}
