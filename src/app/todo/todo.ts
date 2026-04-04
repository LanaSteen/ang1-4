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
  addText = "Add Task"

  newTask = ""
  tasks :Task[] =[]
  comp = "Comlete"
  textForSortBtn = "sort by priority asc"

  sort(){
    if(this.textForSortBtn == "sort by priority asc"){
      this.tasks.sort((a,b) =>
       b.priority - a.priority)
      this.textForSortBtn = "sort by priority desc"
    }else {
      this.textForSortBtn = "sort by priority asc"
      this.tasks.sort((a,b) =>
        a.priority- b.priority )
    }
  }


  edit(titile : string, priority : number, ind : number){
      this.deleteTask(ind)
      this.newTask = titile
      this.priority = priority
      this.addText = "Save Changes"
  }
  addTask(){

   this.addText = "Add Task"
   if(this.newTask !=""){
      
    this.tasks.push({
      id : this.tasks.length+1,
      title : this.newTask,
      completed : false,
      priority : this.priority

    })
    this.newTask = ""
    this.priority = 0
    localStorage.setItem("tasks", JSON.stringify(this.tasks))
     }
  }
  
  deleteTask(index : number){
      this.tasks.splice(index,1)
      // this.tasks = this.tasks.filter(el => el.id!=index)
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