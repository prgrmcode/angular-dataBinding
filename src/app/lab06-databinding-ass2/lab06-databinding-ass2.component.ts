import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab06-databinding-ass2',
  templateUrl: './lab06-databinding-ass2.component.html',
  styleUrls: ['./lab06-databinding-ass2.component.css']
})
export class Lab06DatabindingAss2Component implements OnInit {

  btEnabled: boolean = false;
  sentence: string = '';
  word: string = '';
  btnSentence: string = "Show Sentence";
  isShow: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  onBtnClick(): void {

    if (this.word) {
      this.sentence += " " + this.word;
      console.log("added");
      console.log(this.sentence);
      this.word = '';
    } else {
      console.warn("please add word");
    }

    if (this.sentence) {
      this.btEnabled = true;
    } else {
      this.btEnabled = false;
    }
  }

  onBtn2Click(): void {
    if (this.btnSentence === "Show Sentence") {
      this.btnSentence = "Hide Sentence";
    } else if (this.btnSentence === "Hide Sentence") {
      this.btnSentence = "Show Sentence";
    }
    this.isShow = !this.isShow;    
  }

}
