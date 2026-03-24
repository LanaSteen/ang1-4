
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})


export class App {
  // protected readonly title = signal('ang1-4');

  name = "John"
  // name = "vinme sxva"  error
  age = 50
  isAuth = true
  hint = "password"
  photo = "https://images.unsplash.com/photo-1773847469674-189153e5e32d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  link = "www.google.com"
  obj = {
     grade : 100,
     subject : "jS",
     
  }

 
  print(){
    console.log("hello");
    this.name = "100"
    this.hint = "email"
  }

arr = [20,60,30]


  
}



let user = {
    name : 50,


    print(){}
}


function rame(){}

// spa -  single page application