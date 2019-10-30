import { Component, OnInit } from '@angular/core';
import {
  NavController,
  LoadingController,
  Platform,
  ToastController
} from '@ionic/angular';
import { DatePipe } from '@angular/common';
// import { Media, MediaObject } from '@ionic-native/media/ngx';
// import { MusicControls } from '@ionic-native/music-controls/ngx';
import { File } from '@ionic-native/file/ngx';
import {
  FileTransfer,
  FileTransferObject
} from '@ionic-native/file-transfer/ngx';

@Component({
  selector: 'app-audioplayer',
  templateUrl: './audioplayer.page.html',
  styleUrls: ['./audioplayer.page.scss'],
})
// to listen to plugin events:


export class AudioplayerPage implements OnInit {


  constructor(private platform: Platform, private loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private transfer: FileTransfer,
    private datePipe: DatePipe) { }

  ngOnInit() {
    // file.play();
  };


  
  // release the native audio resource
  // Platform Quirks:
  // iOS simply create a new instance and the old one will be overwritten
  // Android you must call release() to destroy instances of media when you are done
  //file.release();
  

}
