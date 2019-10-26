import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../app.service';


@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage {

  public userLists: Array<{
    user_id: string; user_name: string; user_email: string; user_phone: string; user_age: string;
    created_on: string; user_status: string }> = [];
 
  constructor(public appService: AppService, private router: Router) {
  }

  public update(user) {
    this.router.navigate(['/tabs/tab2'],user)
  }

  ngOnInit() {
    this.appService.getUsers().subscribe((response)=>{
      if(response)
      this.userLists = response.responce
    })
  }
}
