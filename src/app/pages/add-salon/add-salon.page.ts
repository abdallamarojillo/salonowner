import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
import { Camera } from "@ionic-native/camera/ngx";
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-add-salon',
  templateUrl: './add-salon.page.html',
  styleUrls: ['./add-salon.page.scss'],
})
export class AddSalonPage implements OnInit {
  isImgChange: boolean;
  imagePreview: any = '../../../assets/img/placeholder.png';
  gender: any;
  time = '08:00'
  name:string = '';
  phone:string = '';
  website:string = '';
  address:string = '';
  city:string = '';
  state:string = '';
  zipcode:string = '';
  country:string = '';
  give_service:string = '';
  home_charges:string='';
  sunopen:any;
  sunclose:any;
  monopen:any ='';
  monclose:any ='';
  tueopen:any ='';
  tueclose:any ='';
  wedopen:any ='';
  wedclose:any ='';
  thuopen:any ='';
  thuclose:any ='';
  friopen:any ='';
  friclose:any ='';
  satopen:any ='';
  satclose:any ='';

  sunCheck:any = {
    sunchecked:0
  }
  monCheck:any = {
    sunchecked:0
  }
  tueCheck:any = {
    sunchecked:0
  }
  wedCheck:any = {
    sunchecked:0
  }
  thuCheck:any = {
    sunchecked:0
  }
  friCheck:any = {
    sunchecked:0
  }
  satCheck:any = {
    sunchecked:0
  }
  galleryPreviewImage: string;

  

  //start errors
  err: any;
  nameErr: any;
  phoneErr: any;
  websiteErr:any;
  addressErr:any;
  cityErr:any;
  stateErr:any;
  zipcodeErr:any;
  countryErr:any;
  giveserviceErr:any;
  homechargesErr:any;
  genderErr:any;
  descErr:any;


  // end errors
  constructor(
    private util:UtilService,
    private camera:Camera,
    private api:ApiService
  ) { }


  ngOnInit() {
  }
  sunOpenTime:any = '';
  sunCloseTime:any = '';
  monOpenTime:any = '';
  monCloseTime:any = '';
  tueOpenTime:any = '';
  tueCloseTime:any = '';
  wedOpenTime:any = '';
  wedCloseTime:any = '';
  thuOpenTime:any = '';
  thuCloseTime:any = '';
  friOpenTime:any = '';
  friCloseTime:any = '';
  satOpenTime:any= '';
  satCloseTime:any = '';
  check(dateString){
   var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday open',time);
   this.sunOpenTime = time;
   return time;
  }
  check2(dateString){
    var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday close',time);
   this.sunCloseTime = time;
   return time;
  }
  check3(dateString){
    var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday close',time);
   this.monOpenTime = time;
   return time;
  }
  check4(dateString){
    var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday close',time);
   this.monCloseTime = time;
   return time;
  }
  check5(dateString){
    var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday close',time);
   this.tueOpenTime = time;
   return time;
  }
  check6(dateString){
    var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday close',time);
   this.tueCloseTime = time;
   return time;
  }
  check7(dateString){
    var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday close',time);
   this.wedOpenTime = time;
   return time;
  }
  check8(dateString){
    var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday close',time);
   this.wedCloseTime = time;
   return time;
  }
  check9(dateString){
    var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday close',time);
   this.thuOpenTime = time;
   return time;
  }
  check10(dateString){
    var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday close',time);
   this.thuCloseTime = time;
   return time;
  }
  check11(dateString){
    var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday close',time);
   this.friOpenTime = time;
   return time;
  }
  check12(dateString){
    var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday close',time);
   this.friCloseTime = time;
   return time;
  }
  check13(dateString){
    var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday close',time);
   this.satOpenTime = time;
   return time;
  }
  check14(dateString){
    var date = new Date(dateString);
   var hours = date.getHours() > 24 ? date.getHours() - 24 : date.getHours();
   var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
   let time = hours + ":" + minutes + " ";
   console.log('sunday close',time);
   this.satCloseTime = time;
   return time;
  }
  desc:any = '';
  owner_id:any = '';

  ngOninit()
  {
    this.owner_id = localStorage.getItem("user_id") ? localStorage.getItem("user_id") : "NULL";
  }
  save(){
    let data = {
      owner_id: localStorage.getItem("user_id") ? localStorage.getItem("user_id") : "NULL",
      image:this.imagePreview,
      logo:this.imagePreview,
     // owner_id: this.owner_id,
      name:this.name,
      phone:this.phone,
      gender:this.gender,
      website:this.website,
      address:this.address,
      zipcode:this.zipcode,
      country:this.country,
      give_service:this.give_service,
      home_charges:this.home_charges,
      sunopen:this.sunOpenTime,
      sunclose:this.sunCloseTime,
      monopen:this.monOpenTime,
      monclose:this.monCloseTime,
      tueopen:this.tueOpenTime,
      tueclose:this.tueCloseTime,
      wedopen:this.wedOpenTime,
      wedclose:this.wedCloseTime,
      thuopen:this.thuOpenTime,
      thuclose:this.thuCloseTime,
      friopen:this.friOpenTime,
      friclose:this.friCloseTime,
      satopen:this.satOpenTime,
      satclose:this.satCloseTime,
      latitude:36.02222,
      longitude:89.000,
      desc:this.desc,
      state:this.state,
      city:this.city,
      sunCheck:this.sunCheck.checked,
      monCheck:this.monCheck.checked,
      tueCheck:this.tueCheck.checked,
      wedCheck:this.wedCheck.checked,
      thuCheck:this.thuCheck.checked,
      friCheck:this.friCheck.checked,
      satCheck:this.satCheck.checked
    }
    console.log('data',data);
    this.api.postWithHeader('addSalon',data).subscribe((success:any) => {
      if(success.success){
        this.util.success('Success !','Salon Added Successfully');
        this.util.navCtrl.navigateRoot('/tabs/calendar');
      }
    }, err => {
      this.util.error('Error !','Salon Could Not be Added. Please check errors and try again');
      console.log(err)
      this.err = err.error.errors;
        this.nameErr = this.err.name;
        this.phoneErr = this.err.phone;
        this.websiteErr = this.err.website;
        this.addressErr = this.err.address;
        this.zipcodeErr = this.err.zipcode;
        this.countryErr = this.err.country;
        this.cityErr = this.err.city;
        this.stateErr = this.err.state;
        this.giveserviceErr = this.err.give_service;
        this.homechargesErr = this.err.home_charges;
        this.genderErr = this.err.gender;
    })
  }

  async albumSheet() {
    const actionSheet = await this.util.sheetCtrl.create({
      header: "Albums",
      mode: "ios",
      cssClass: "image-picker",
      buttons: [
        {
          text: "Gallery",
          icon: "images-sharp",
          handler: () => {
            this.getGallery();
          },
        },
        {
          text: "Camera",
          icon: "camera-sharp",
          handler: () => {
            this.getCamera();
          },
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {},
        },
      ],
    });
    await actionSheet.present();
  }

  public getCamera(): any {
    this.camera
      .getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true,
      })
      .then((file_uri) => {
        this.galleryPreviewImage = "data:image/jpg;base64," + file_uri;
        this.isImgChange = true;
        this.imagePreview = file_uri;
      });
  }

  public getGallery(): any {
    this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        correctOrientation: true,
      })
      .then((file_uri) => {
        this.galleryPreviewImage = "data:image/jpg;base64," + file_uri;
        this.imagePreview = file_uri;
        this.isImgChange = true;
      });
  }


  changeGender(e) {
    console.log(e.detail.value);
    this.gender = e.detail.value;
  }

}
