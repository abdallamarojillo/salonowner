import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  email:string = '';
  name:string ='';
  password:string = '';
  confirm_password:string='';
  phone:string='';
  err: any;
  emailErr: any;
  passErr: any;
  ConfPassErr: any;
  phoneErr: any;
  nameErr: any;
  constructor(
    private api:ApiService,
    private util:UtilService
  ) { }

  ngOnInit() {
  }

  signIn(){
    console.log('sasas');
    if(this.email == null){
      this.util.showToast('Please Enter Email...');
    }
    else if(this.name == null){
      this.util.showToast('Please Enter Name');
    }
    else if(this.phone == null){
      this.util.showToast('Please Enter Phone');
    }
    else if(this.password != this.confirm_password){
      this.util.showToast('Password and Confirm Password are doesn`t match');
    }
    else{
      this.api.post("register",{
        email:this.email,
        name:this.name,
        password:this.password,
        confirm_password:this.confirm_password,
        phone:this.phone
      }).subscribe((res:any)=>{
          if(res.success){
            localStorage.setItem("admin_token", res.data.token);
            this.util.navCtrl.navigateRoot("tabs/calendar");
          }
      },err => {
        console.log(err); 
        this.err = err.error.errors;
        this.emailErr = this.err.email[0];
        this.passErr = this.err.password[0];
        this.ConfPassErr = this.err.confirm_password[0];
        this.phoneErr = this.err.phone[0];
        this.nameErr = this.err.name[0];
      })
    }
  }

}
