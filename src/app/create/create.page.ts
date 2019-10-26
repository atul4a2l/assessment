import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AppService } from '../app.service'
@Component({
  selector: 'app-create',
  templateUrl: 'create.page.html',
  styleUrls: ['create.page.scss']
})
export class CreatePage {
  createUserDetailForm: FormGroup;
  constructor(private formBuilder: FormBuilder,public appService: AppService) {}
  
  createUserForm(){
    this.createUserDetailForm=this.formBuilder.group({
      user_name: ['', Validators.required],
      user_email: ['', Validators.required],
      user_age: ['', Validators.required],
      User_phone:['', Validators.required]
    });
  }

   public create(){
     if(this.createUserDetailForm.valid)
     this.appService.createUser(this.createUserDetailForm.value).subscribe((response)=>{
       if(response.status==0)
       this.appService.showToast(response.msg)
       if(response.status==1)
       this.appService.showToast(response.msg)
      this.createUserDetailForm.reset()
     })
   } 
  ngOnInit() {
    this.createUserForm()
  }
}
