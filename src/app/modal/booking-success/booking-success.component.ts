import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-booking-success',
  templateUrl: './booking-success.component.html',
  styleUrls: ['./booking-success.component.scss'],
})
export class BookingSuccessComponent implements OnInit {

  constructor(
    private util: UtilService
  ) { }

  ngOnInit() {}

  public navigateTo(navPath:string) {
    this.util.modalCtrl.dismiss();
    this.util.navCtrl.navigateRoot(navPath);
  }
}
