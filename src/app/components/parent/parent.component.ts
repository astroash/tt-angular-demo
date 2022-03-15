import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  myName: string = "aisha"

  @ViewChild(ChildComponent) child!:  ChildComponent;


  displayInput(input: string){
    console.log(input)
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  ngAfterViewInit(){
    alert(this.child.internalSecretMessage)

  }
}
