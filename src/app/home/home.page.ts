import { Component } from '@angular/core';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';
import { NgZone } from '@angular/core';
import { ChangeDetectorRef } from '@angular/core';
import { NavController, Platform, NavParams } from '@ionic/angular';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Router, NavigationExtras } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
const endpoint = 'https://tyra9qmzk3.execute-api.us-east-1.amazonaws.com/beta';
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type': 'application/json',
//     'Access-Control-Allow-Origin': '*'

//   })
// };

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  matches: String[];
  isRecording = false;
  books: Observable<any>;
  queryText: Observable<any>;
  data: any;
  constructor(public navCtrl: NavController, private router: Router, private speechRecognition: SpeechRecognition, private cd: ChangeDetectorRef, private plt: Platform, public httpClient: HttpClient) {

  }
  stopListening() {
    this.speechRecognition.stopListening().then(() => {
      this.isRecording = false;
    });
  }

  getPermission() {
    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {
        if (!hasPermission) {
          this.speechRecognition.requestPermission();
        }
      });
  }

  startListening() {
    let options = {
      language: 'en-US'
    }
    this.speechRecognition.startListening().subscribe(matches => {
      console.log(matches)
      this.matches = matches;
      this.cd.detectChanges();
      this.searchBooks(matches)
      this.isRecording = true;
    })
  }
  searchByKeyword(event) {
    let arr = [];
    arr.push(event.target.value)
    console.log('in search by keyboard' + JSON.stringify(event.target.value))
    this.searchBooks(arr);
  }

  searchBooks(query) {
    let body = {
      param: query[0]
    }
    console.log(query + '+++++++')

    this.books = this.httpClient.post<any>(endpoint, body);
    this.books.subscribe(data => {
      this.data = data;
      console.log('my data: ', data);
    })
  }

  //  getBooksMetaData(){

  //  }

  navigate(id) {
    console.log(id)
    let bookData = {};
    if (this.data.some(e => e.id === id)) {
      bookData = this.data.find(function (obj) { return obj.id === id; });
    } else {
      console.log('in else')
    }

    let navigationExtras: NavigationExtras = {
      state: {
        user: bookData,
      }
    };
    this.router.navigate(['details'], navigationExtras);
  }
} 
