import { CustomPipeModule } from "./modules/custom-pipe.module";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { Camera } from '@ionic-native/camera/ngx';
import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
// ngx
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { ToastrModule } from "ngx-toastr";
// service
import { ApiInterceptorProvider } from "./interceptors/api-interceptor";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgCalendarModule } from "ionic2-calendar";
import { CalendarModule } from "ion2-calendar";
import { NgxProgressiveImgLoaderModule } from "ngx-progressive-img-loader";
import { BookingSuccessComponent } from "./modal/booking-success/booking-success.component";
import { OneSignal } from "@ionic-native/onesignal/ngx";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
@NgModule({
  declarations: [AppComponent, BookingSuccessComponent],
  entryComponents: [BookingSuccessComponent],
  imports: [
    NgCalendarModule,
    BrowserModule,
    CalendarModule,
    NgxProgressiveImgLoaderModule,
    IonicModule.forRoot({
      rippleEffect: false,
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxUiLoaderModule,
    ReactiveFormsModule,
    CustomPipeModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    OneSignal,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorProvider,
      multi: true,
    },
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Geolocation,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent],
})
export class AppModule {}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
