import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
imagedata = [];
imginfo ;
imginfo1 =[];
imgurl=[];
imgurl1=[];
Rating=[1,2,3,4,5]
reviews=[];
ratingvalue1;
ratingvalue2;
ratingvalue3;
ratingvalue4;
ratingvalue5;
ratingby;
ratingreason;
  constructor(public apiserv:ApiService,public route:Router) { }

  ngOnInit() 
  {
    this.apiserv.foodimg().subscribe(data=>{
      
       this.imagedata.push(data)
      console.log(data)
    
    })



  
}

imgdetails(id)
{
  
  this.apiserv.imginfo(id).subscribe(data=>{
    this.imginfo = data;
  console.log(data)

 

  })
  

      
      

}


originalpage()
{
  this.reviews.push({"ratingvalue":this.ratingvalue1 || this.ratingvalue2 || this.ratingvalue3 || this.ratingvalue4 || this.ratingvalue5,"ratingby":this.ratingby,"ratingreason":this.ratingreason})
console.log(this.reviews)
 location.reload()
}
}




  

    



