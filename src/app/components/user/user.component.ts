import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user:User ={
  firstName:'Surya',
  lastName:'Guthula',
  age:45,
  address:{
    street:'AdiLakshmiNagar',
    city:'Ravulapalem',
    state:'AndhraPradesh'
  },
  image:'http://lorempixel.com/600/600/people/33'
}

  constructor() { }

  ngOnInit(): void {
  
  }
  

}
