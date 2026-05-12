import { CurrencyPipe, DatePipe, LowerCasePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

// rxjs

@Component({
  selector: 'app-child',
  imports: [LowerCasePipe, DatePipe, CurrencyPipe],
  templateUrl: './child.html',
  styleUrl: './child.scss',
})
export class Child {

  @Input()  childInfo = ""
  @Output()  infoFromChild = new EventEmitter()



  sendInfoToParent(){
      this.infoFromChild.emit(this.childInfo)
  }

  // childInfo = "dddddd"



  text = "text"
  date = new Date()
  amount = 100


}



