import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AppService } from '../app.service'
import { Router } from  '@angular/router'
@Component({
  selector: 'app-update',
  templateUrl: 'update.page.html',
  styleUrls: ['update.page.scss']
})
export class UpdatePage {
  public userDetail: any;
  upadateUserDetailForm: FormGroup;
  constructor(private formBuilder: FormBuilder,public appService: AppService,private router:Router) {
  }
  
  userDetailForm(){
    this.upadateUserDetailForm=this.formBuilder.group({
      user_id: [this.userDetail.user_id, Validators.required],
      user_name: [this.userDetail.user_name, Validators.required],
      user_email: [this.userDetail.user_email, Validators.required],
      user_age: [this.userDetail.user_age, Validators.required],
      User_phone:[this.userDetail.user_phone, Validators.required]
    });
  }

  update(){
    if(this.upadateUserDetailForm.valid)
    this.appService.updateUser(this.upadateUserDetailForm.value).subscribe({
      next: response =>{
        if(response.status==0)
        this.appService.showToast(response.msg)
        if(response.status==1)
        this.appService.showToast(response.msg)
      },
      error: err =>{
        console.log(err)
      }
    })
  }
  
  ngOnInit() {
    this.userDetail = this.router.getCurrentNavigation().extras
    this.userDetailForm();
  }
}
