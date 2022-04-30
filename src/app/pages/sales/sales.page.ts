import { UtilService } from 'src/app/services/util.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage implements OnInit {

  constructor(
    private util: UtilService
  ) { }

  ngOnInit() {
  }
 
  notAvailable() {
    this.util.navCtrl.navigateForward('reports');
  }

}
