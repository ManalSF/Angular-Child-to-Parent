import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  @Output()
  a:EventEmitter<string> = new EventEmitter<string>();
  
  passData(){
    this.a.emit("Message coming from child 1");
  }

  /*@Input('myTitle')
  title!: string;*/
    
  constructor() { }

  ngOnInit(): void {
  }

}
