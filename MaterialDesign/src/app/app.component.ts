import { Component, OnInit } from '@angular/core';
import{ inputInterface } from './InputInterface';
import { inputs } from './input';
import { dataInterface } from './DataInterface';
import { info } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: any;
  constructor() { }
  data:dataInterface[];
  input:inputInterface[];
  ngOnInit(): void {    
    this.data = info;
    this.input = inputs;
  }
}