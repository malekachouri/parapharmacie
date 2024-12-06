import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- Import this
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';


imports:[
   BrowserModule,
   AppRoutingModule,
   FormsModule]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  #title = 'Angular Interpolation Exemple';
  isDisabled=true;
  clickCount=0;
  name="";
  clearName(){
  this.name="";}
num:number=0;


  clickMe(){this.clickCount++;}
  getTitle():string{
    return this.title;
  }

  title: string = 'nglf Example';
  showMe: boolean = false;

employees = [
name: "Rahul", email: "rahul@gmail.com",
skills: [{skill: 'Angular', exp: '2' },{ skill: 'Javascript', cxp: '7' },{skill: 'TypeScript', exp: '3'}]},{
name: "Sachin", email: "sachin@gmail.com",
skills: [{ skill: 'Angular', exp: '1'}, { skill: 'Android', exp: '3'}{skill: 'React', exp: '2'}]},{
name:"laxmna",email:"laxman@gmail.com",
skills:[{skill:'HTML',exp:'2'},{skill:'CSS',exp:'2'} ,{skill:'Javascript',exp:'2'}]
}









}



