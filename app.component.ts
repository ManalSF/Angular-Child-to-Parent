import { Component } from '@angular/core';
import {TestService} from "./core/service/test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  childData!: string;
  title: any;
  parentData(data: string){
    this.childData=data;
  }
  /*titleForHome = 'my-home';
  titleForHome2 = 'my-home2';

  getName(){
    let name = 'name';
    return name;
  }

  constructor(private testService:TestService) {
  }

  public get title(){
    return this.testService.title
  }

  public set title(newTitle:string){
    this.testService.title = newTitle
  }*/
}