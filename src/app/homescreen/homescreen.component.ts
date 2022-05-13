import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileserviceService } from '../profileservice.service';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {


  userForm:any=FormGroup;
  UserData: any=[];
  constructor(private profileservice:ProfileserviceService, private formbuilder:FormBuilder, private router:Router) { }

  ngOnInit(): void {

    this.getAllUser();
    this.userForm=this.formbuilder.group({
      image:['', Validators.required],
      fname:['', Validators.required],
      lname:['', Validators.required],
      email:['', Validators.required],
      phone:['', Validators.required],
      address:['', Validators.required],
      state:['', Validators.required],
      country:['', Validators.required],
      age:['', Validators.required],
      hobies:['', Validators.required]
    })
  }

  getAllUser(){
    this.profileservice.getUser().subscribe(res=>{
      this.UserData=res;
    })
  }
  postUserDetails(){
    console.log(this.userForm.value,"post");
    this.profileservice.postUser(this.userForm.value).subscribe(res=>{

      alert("User Added Sucessfully!");
      this.userForm.reset();
      this.getAllUser();
      this.router.navigate(['/profile']);    })
  }


}
