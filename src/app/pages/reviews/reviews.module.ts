import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { ReviewsPageRoutingModule } from "./reviews-routing.module";

import { ReviewsPage } from "./reviews.page";
import { TimeAgoPipe } from "time-ago-pipe";
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, ReviewsPageRoutingModule,TranslateModule],
  declarations: [ReviewsPage, TimeAgoPipe],
})
export class ReviewsPageModule {}
