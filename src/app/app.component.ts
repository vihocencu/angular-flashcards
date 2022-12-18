import { AfterViewInit, Component, Directive, ElementRef, Input, ViewChild } from '@angular/core';
import { FlashCard } from './flash';
import { FlashService } from './flash.service';
import { LessonService } from './lesson.service';
import { ChallengeService } from './challenge.service';
import {StatisticService } from './statistic.service';
import {Summary}from './summary';
import { Lesson } from './lesson';
import { Challenge } from './challenge';



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
  questionsCount = 0;
  answeredQuestions = 0;
  correctAnswered = 0;
  hint = "Hint";
  okBildVisible = false;
  wrongBildVisible = false;
  showStatistics: boolean = false;
  hintsUsed = 0;
  cards: FlashCard[] = [] ;
  lessons: Lesson[] = [{id:0,title:"",language:""}];
  challenges: Challenge[] = [];
  challengesSize: number = 0;
  user = "";
  french = true;
  english = true;
  hintWasUsed: string = '0';
  answers: Summary[] = [];

  constructor(private lessonService: LessonService, private challengeService: ChallengeService, private statisticService: StatisticService) {
    this.loadLessons();
  }

  loadLessons() {
    let languages : string;
    languages = "";
    if (this.french) {
      languages = languages + 'fr,';
    }
    if (this.english) {
      languages = languages + 'en,';
    }
    if (languages.length>0) {
    languages = languages.substring(0,languages.length-1);
    }
	   this.lessonService.getLessons(languages, this.user).subscribe((response:Lesson[])=>{this.lessons = response;this.loadFirstTest();});

  }
  loadFirstTest() {
    if (this.lessons.length>0) this.selectTest(this.lessons[0].id);else this.challengesSize = 0;
  }
  setFrench(event:any) {
    this.challenges = [];
    this.challengesSize =0;
    this.lessons=[];
    console.log(event.value);
    console.log(event);
    console.log(event.checked);
    console.log(this.lessons);
    this.french = event.checked;
    this.loadLessons();
    this.loadFirstTest();
    }

  setEnglish(event:any) {
    this.lessons = [];
    this.challenges = [];
    this.challengesSize =0;
    console.log(event.value);
    console.log(event);
    console.log(event.checked);
    console.log(this.lessons);

    this.english = event.checked;
    this.loadLessons();
    this. loadFirstTest();
  }

  onStartButtonClick() {
    console.log('onStartButtonClick');
    if (this.challenges.length == 0) {    
      console.log('this.challenges.length == 0');

      return;
    }

    this.index = 0;
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
      this.testsLength = this.challenges.length;
      this.hintsUsed = 0;
      this.answers = [];

    }
    else {
      this.start = 'Start';
      this.okBildVisible = false;
      this.wrongBildVisible = false;
    }
  }

  getQuestion():string {
    return this.challenges[this.index].question;
  }
  getAnswer():string {
    return this.challenges[this.index].answer;
  }
  isTestInProgress() {
    return this.testInProgress;
  }
  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  selectTest(s: any) {
    //this.challengeService.getChallenges().subscribe((response:Challenge[])=>{this.challenges = response});
    this.challengeService.getChallengesForLessonId(s).subscribe((response:Challenge[])=>{this.challenges = response;this.challengesSize = this.challenges.length;});

  }

  onHintButtonClick() {
    	this.hint = this.getAnswer();
      this.hintsUsed ++;
      this.hintWasUsed = '1';
  }

  onNextButtonClick() {
    this.pruefeEingabe();
    this.hintWasUsed = '0';
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

  setUser(event:any) {
  console.log("in setText:"+event.value);
  this.user =event.value;
  this.loadLessons();
  this.loadFirstTest();
}
  pruefeEingabe() {
    let correct =  isAnswerCorrect(this.getAnswer(),this.inputText2.toLowerCase());
    let colou : string =  correct? "":"false";
    let summary :  Summary = {answer:this.inputText2.toLowerCase(),expected:this.getAnswer(),question:this.challenges[this.index].question,colour:colou};
    this.answers = [summary].concat( this.answers) ;

    console.log(normalizeText(this.getAnswer().toLowerCase())+' ' + normalizeText(this.inputText2.toLowerCase()+ ' '+correct));
    if (correct) {
      this.correctAnswered++;
    }
    this.answeredQuestions++;
    this.statisticService.saveStatistics(this.user, this.challenges[this.index].id+'', correct?'1':'0',this.hintWasUsed,this.getAnswer(),this.inputText2.toLowerCase()) .subscribe((response:number)=>{console.log('FINISHED:'+response);});;
   

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

