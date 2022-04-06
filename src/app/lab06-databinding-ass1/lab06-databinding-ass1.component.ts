import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab06-databinding-ass1',
  templateUrl: './lab06-databinding-ass1.component.html',
  styleUrls: ['./lab06-databinding-ass1.component.css']
})
export class Lab06DatabindingAss1Component implements OnInit {

  btEnabled: boolean = false;
  username: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  ongModelChange(): void {
    if (this.username) {
      this.btEnabled = true;
    } else {
      this.btEnabled = false;
    }
  }

  onBtClick(): void {
    this.username = '';
    this.btEnabled = false;
  }

}
