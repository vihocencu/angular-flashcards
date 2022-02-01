import { AfterViewInit, Component, Directive, ElementRef, Input, ViewChild } from '@angular/core';
import { a1 } from './a1';
import { a2 } from './a2';
import { a3 } from './a3';
import { a4 } from './a4';
import { FlashCard } from './flash';
import { FlashService } from './flash.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  @ViewChild('inputText')
  inputText!: ElementRef;

  testInProgress = false;
  test = '';
  checkBoxVisible = 'disabled';
  selectedTest = '';
  start = 'Start';
  index = 0;
  testsLength = 0;
  inputText2 = "";
  xyz = new  a1;
  questionsCount = 0;
  answeredQuestions = 0;
  correctAnswered = 0;
  hint = "Hint";
  okBildVisible = false;
  wrongBildVisible = false;
  showStatistics: boolean = false;
  hintsUsed = 0;
  cards: FlashCard[] = [] ;

  constructor(private flashService: FlashService) { }

  onStartButtonClick() {
    this.index = 0;
    console.log('OnClick');
    this.testInProgress = !this.testInProgress;
    console.log(this.testInProgress);
    this.checkBoxVisible = '';
    this.inputText2 = '';
    this.showStatistics = !this.testInProgress;
    this.hint = 'Hint';

    if (this.testInProgress) {
      this.answeredQuestions = 0;
      this.start = 'End';
      this.correctAnswered = 0;
      this.testsLength = this.xyz.getKeys().length;
      this.hintsUsed = 0;
    }
    else {
      this.start = 'Start';
      this.okBildVisible = false;
      this.wrongBildVisible = false;
    }
  }

  getQuestion():string {
    return this.xyz.getKey(this.index);
  }
  getAnswer():string {
    return this.xyz.getValue(this.index);
  }
  isTestInProgress() {
    return this.testInProgress;
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  selectTest(s: any) {
    console.log("SSSS"+s);
    this.selectedTest = s;
   
      this.flashService.getCards()
      .subscribe(cards => this.cards = cards);
   
      console.log(this.cards[0]);
    if (s == "A1") {
      this.xyz = new a1;
    }
    if (s == "A2") {
      this.xyz = new a2;
    }
    if (s == "A3") {
      this.xyz = new a3;
    }
    if (s == "A4") {
      this.xyz = new a4;
    }    
    console.log(this.xyz.keys);
  }

  onHintButtonClick() {
    	this.hint = this.getAnswer();
      this.hintsUsed ++;
  }

  onNextButtonClick() {
    this.pruefeEingabe();
    this.index = this.index + 1;
    this.testInProgress = this.index!=this.testsLength;
    if (!this.testInProgress) {
      this.start = 'Start';
      this.showStatistics = true;
      this.okBildVisible = false;
      this.wrongBildVisible = false;
      this.hintsUsed = 0;
      return;
    }
    this.inputText.nativeElement.value = "";
    console.log(this.index);
    this.okBildVisible = false;
    this.wrongBildVisible = false;
    this.hint = 'Hint';
  }

  onPruefenButtonClick() {
    console.log(this.inputText2);
    let expected = this.getAnswer();
    console.log(expected);
    if (isAnswerCorrect(expected,this.inputText2)) {
      this.okBildVisible = true;
      this.wrongBildVisible = false;
    }
    else {
      this.okBildVisible = false;
      this.wrongBildVisible = true;
    }
  }
  setText(event:any) {
    console.log("in setText:"+event);
    this.inputText2 = event.value;
  }
  pruefeEingabe() {
    let correct =  isAnswerCorrect(this.getAnswer(),this.inputText2.toLowerCase());
    console.log(normalizeText(this.getAnswer().toLowerCase())+' ' + normalizeText(this.inputText2.toLowerCase()+ ' '+correct));
    if (correct) {
      this.correctAnswered++;
    }
    this.answeredQuestions++;
  }
  
}

function isAnswerCorrect(expected: string, inputText2: string) {
  expected = normalizeText(expected);
  inputText2 = normalizeText(inputText2);
  return expected.toLowerCase() == inputText2.toLowerCase();
}

function normalizeText(expected: string): string {
  expected = expected.toLowerCase();
  expected = expected.replace("I am", "I'm");
  expected = expected.replace("i am", "i'm");
  expected = expected.replace("I'am", "I am");
  expected = expected.replace("i'm", "i am");
  expected = expected.replace("'re", " are");
  expected = expected.replace("'s", " is");
  expected = expected.replace("\s*,s*",",");""
  expected = expected.replace("!", "");
  expected = expected.replace("?", "");
  expected = expected.replace(".", "");
  expected = expected.replace(";", "");
  expected = expected.replace("(", "");
  expected = expected.replace(")", "");
  return expected;
}

