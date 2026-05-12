import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from "@angular/router";

@Component({
  selector: 'app-error',
  imports: [RouterLink],
  templateUrl: './error.html',
  styleUrl: './error.scss',
})
export class Error {

  constructor(private x :Router ){
    console.log(this.x);
    
  }


 user  =  "dsfdsghh"
 id = 10

 

  goToHome(){

     this.x.navigateByUrl(`/home?id=${this.id}`)
    //  this.x.navigate(["/home"], {
    //    queryParams : {
    //     id : 5
    //   }
    //  })
  }
}
