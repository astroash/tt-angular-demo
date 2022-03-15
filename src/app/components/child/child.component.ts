import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() message: string = "";

  @Output() submitEvent = new EventEmitter<string>();

  internalSecretMessage: string = "I am a child component"
  constructor() { }

  onSubmit(x: string){
    this.submitEvent.emit(x);
  }

  ngOnInit(): void {
  }

}
