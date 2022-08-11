import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
name: string = 'Neto';
age: number = 15;
job = 'Programador';

  constructor() { }

  ngOnInit(): void {
  }

}
