import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/services/api.service";
import { UtilService } from "src/app/services/util.service";

@Component({
  selector: "app-reviews",
  templateUrl: "./reviews.page.html",
  styleUrls: ["./reviews.page.scss"],
})
export class ReviewsPage implements OnInit {
  public reviews: Array<any> = new Array();


  constructor(private api: ApiService, private util: UtilService) {
    this.getReviews();
  }

  changeStatus(e) {
    console.log(e);
    let data = {
      review_id: e,
    };
    this.api.postWithHeader("reviewReport", data).subscribe(
      (success: any) => {
        if (success.success) {
          this.util.success("Success!", "Status Has Been Changed");
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }

  ngOnInit() {}

  getReviews(): void {
    this.api.getWithHeader("review").subscribe((res: any) => {
      console.log("res: ", res);
      this.reviews = res.data;
    });
  }
}
