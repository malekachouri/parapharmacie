import { NgForm } from '@angular/forms';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Template driven forms';
  countryList:country[]=[
    new country("1","India"),
    new country("2","USA"),
    new country("1","England"),
  ];
  onSubmit(contactForum:NgForm)
{
  console.log(contactForum.value);
}
}  
export class country{
  id:string;
  name:string;
  constructor(id:string,name:string)
  {this.id=id;
    this.name=name;
  }
}
