import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.page.html",
  styleUrls: ["./clients.page.scss"],
})
export class ClientsPage implements OnInit {
  public clients = new Array();
  public searchKeyword: string;

  constructor(private api: ApiService) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.getClients(null);
  }

  public getClients(event): void {
    this.api.getWithHeader("clients").subscribe((res: any) => {
      this.clients = res.data;
      if (event != null) {
        event.target.complete();
      }
    });
  }
}
