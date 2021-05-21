import { Input } from '@angular/core';
import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {
  @Output()
  a:EventEmitter<string> = new EventEmitter<string>();
  
  passData(){
    this.a.emit("Message coming from child 2");
  }

  /*@Input('myTitle')
  title!: string;*/
    
  constructor() { }

  ngOnInit(): void {
  }

}
