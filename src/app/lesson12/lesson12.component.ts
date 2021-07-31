import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson12',
  templateUrl: './lesson12.component.html',
  styleUrls: ['./lesson12.component.css']
})
export class Lesson12Component implements OnInit {

  words: Array<string> = [];
  word!: string;
  text!: string;
  anonim = '';
  AreaWords: Array<string> = [];

  constructor() { } 

  ngOnInit(): void {
  }
  Add(): void {
    this.words.push(this.word);
    this.word = '';
  }

  Reset(): void {
    this.words = [];
    this.text = '';
    this.AreaWords = [];
  }

  Confirm(): void {
    this.text.split(' ').forEach((elementT, index) => {
      this.AreaWords.push(elementT);
      this.words.forEach(element => {
        if (elementT == element) {
          for (let i = 0; i < element.length; i++) {
            this.anonim += '*';
          }
          this.AreaWords.splice(index, 1, this.anonim);
          this.anonim = '';
        }
      });
      this.text = this.AreaWords.join(' ');
    });
    this.AreaWords = [];
  }
};
