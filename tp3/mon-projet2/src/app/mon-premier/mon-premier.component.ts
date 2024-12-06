import { Component } from '@angular/core';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mon-premier',
  templateUrl: './mon-premier.component.html',
  styleUrl: './mon-premier.component.css'
})
export class MonPremierComponent implements OnInit{
 
    appareilName: string = 'Machine à laver';
    appareilStatus: string = 'éteint';
    constructor()  { }
    ngOnInit () {}
}
