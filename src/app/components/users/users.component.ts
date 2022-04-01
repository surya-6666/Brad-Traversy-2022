import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public showExtended:boolean=true;
  public loaded:boolean=false;
  public enableAdd:boolean=true;
  public currentClasses ={}
  public currentStyles={}
  public users:User[]=[];

  constructor() { }

  ngOnInit(): void {
    this.users=[
      {
        firstName:'Surya',
        lastName:'Guthula',
        age:45,
        address:{
          street:'AdiLakshmiNagar',
          city:'Ravulapalem',
          state:'AndhraPradesh'
        },
        image:'http://www.behindwoods.com/tamil-movies-cinema-news-16/images/vijay-deverakondas-taxiwaala-trailer-photos-pictures-stills.jpg',
        isActive:true,
        balance:1000,
        registered:new Date('01/02/2019 08:30:00')
        


      },
      {
        firstName:'Chiranjeevi',
        lastName:'Konidela',
        age:45,
        address:{
          street:'MahaLakshmiNagar',
          city:'JublieeHills',
          state:'Telangana'
        },
        image:'https://static.toiimg.com/thumb/msid-85211355,width-1200,height-900,resizemode-4/.jpg',
        isActive:true,
        balance:2000,
        registered:new Date('03/08/2020 09:30:00')

      },
      {
        firstName:'MaheshBabu',
        lastName:'Gattamaneni',
        age:45,
        address:{
          street:'VenkataLakshmiNagar',
          city:'Kochi',
          state:'Kerala'
        },
        image: 'https://www.thefamouspeople.com/profiles/images/mahesh-babu-1.jpg',
        isActive:true,
        balance:3000,
        registered:new Date('09/08/1975 06:30:00')
      },

      {
        firstName:'Keerthy',
        lastName:'Suresh',
        age:25,
        address:{
          street:'BrigediarRoad',
          city:'Kottayam',
          state:'Kerala'
        },
        image:'https://pbs.twimg.com/media/FMSMzajaUAIPy62?format=jpg&name=large',
        isActive:false,
        balance:6000,
        registered:new Date('03/08/2021 06:30:00')

      },

        {
          firstName:'Aliya',
          lastName:'Bhatt',
          age:26,
          address:{
            street:'MahaLaxmiRoad',
            city:'Bandra Mumbai',
            state:'Maharastra'
          },
          image: 'https://pbs.twimg.com/profile_images/1426856110036721664/KOCpzVH-.jpg',
          isActive:true,
          balance:9000,
          registered:new Date('25/02/2022 02:30:00')
        }
      
    ];
    this.setcurrentClasses();
    this.setcurrentStyles();




  }
  // public showDetails(){
  //   this.showExtended=!this.showExtended;

  // }
  public setcurrentClasses(){
    this.currentClasses={
      'btn-success' : this.enableAdd,
      'big-text': this.showExtended
    }
  }
  public setcurrentStyles(){
    this.currentStyles={
      'padding-top': this.showExtended ? '0':'40px',
      'font-size ': this.showExtended ? '0':'60px',
      'text-center': this.showExtended ? 'text-success': 'text-danger'
    }
  }



}
