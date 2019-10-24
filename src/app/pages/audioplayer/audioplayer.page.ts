import { Component, OnInit } from '@angular/core';
import {
  NavController,
  LoadingController,
  Platform,
  ToastController
} from '@ionic/angular';
import { DatePipe } from '@angular/common';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { MusicControls } from '@ionic-native/music-controls/ngx';
import { File } from '@ionic-native/file/ngx';
import {
  FileTransfer,
  FileTransferObject
} from '@ionic-native/file-transfer/ngx';
const file: MediaObject = this.media.create('file.mp3');

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.page.html',
  styleUrls: ['./audioplayer.page.scss'],
})
// to listen to plugin events:


export class AudioplayerPage implements OnInit {


  constructor(private media: Media, private musicControls: MusicControls, private platform: Platform, private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private transfer: FileTransfer,
    private datePipe: DatePipe) { }

  ngOnInit() {
    // file.play();
  };

  
  play() {
    file.play();
    file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes
    file.onSuccess.subscribe(() => console.log('Action is successful'));
    file.onError.subscribe(error => console.log('Error!', error));
  }
  // play the file
  
  pause() {
    file.pause();
  }
  // pause the file
  getPosition(){
  // get current playback position
  file.getCurrentPosition().then((position) => {
    console.log(position);
  });
  }

  getDuration(){
  // get file duration
  let duration = file.getDuration();
  console.log(duration);
  }
  
  fileSeek(){
  // skip to 10 seconds (expects int value in ms)
  file.seekTo(10000);
  }
  
  fileStop(){

  // stop playing the file
  file.stop();
  }
  
  // release the native audio resource
  // Platform Quirks:
  // iOS simply create a new instance and the old one will be overwritten
  // Android you must call release() to destroy instances of media when you are done
  //file.release();
  

}
