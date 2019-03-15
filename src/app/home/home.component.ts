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
imginfo = [];
imginfo1 =[];
imgurl=[];
imgurl1=[];
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
   
   this.imginfo.push(data)
   
  
  
   console.log(this.imginfo)
  

  })

      
      

}
}



  

    



