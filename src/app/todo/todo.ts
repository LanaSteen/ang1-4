import { Component } from '@angular/core';
import { Task } from './task';
import { Title } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo',
  imports: [FormsModule],
  templateUrl: './todo.html',
  styleUrl: './todo.scss',
})
export class Todo {

  ngOnInit(){
    console.log("hi")
    this.tasks = JSON.parse(localStorage.getItem("tasks") || "")
    console.log( this.tasks);
    console.log(localStorage.getItem("tasks"));
    
    
  }

priority = 0

  newTask = ""
  tasks :Task[] =[]
  comp = "Comlete"

  addTask(){
    this.tasks.push({
      id : this.tasks.length+1,
      title : this.newTask,
      completed : false,
     ptiority : this.priority

    })

    console.log(this.tasks);
    
    this.newTask = ""
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }
  
  deleteTask(index : number){
      // this.tasks.splice(index,1)

      this.tasks = this.tasks.filter(el => el.id!=index)
     localStorage.setItem("tasks", JSON.stringify(this.tasks))
  }

  compliteTask(obj : Task){
     obj.completed = !obj.completed
    localStorage.setItem("tasks", JSON.stringify(this.tasks))

  }

}



// this.tasks.push({
//     id : 0,
//     Title : ინპუთში შეყვანილი,
//     compleyte : fasle
// })




// JSON.stringify({
//   name : "dsfgfhh",
//   age : 50
// })


// JSON.parse('{"name":"dsfgfhh","age":50}')