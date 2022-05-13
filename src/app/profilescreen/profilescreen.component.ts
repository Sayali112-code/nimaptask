import { Component, OnInit } from '@angular/core';
import { ProfileserviceService } from '../profileservice.service';

@Component({
  selector: 'app-profilescreen',
  templateUrl: './profilescreen.component.html',
  styleUrls: ['./profilescreen.component.css']
})
export class ProfilescreenComponent implements OnInit {
  UserData: any=[];

  constructor(private profileservice:ProfileserviceService) { }

  ngOnInit(): void {

    this.getAllUser();
  }


  
  getAllUser(){
    this.profileservice.getUser().subscribe(res=>{
      this.UserData=res;
    })
  }
}
