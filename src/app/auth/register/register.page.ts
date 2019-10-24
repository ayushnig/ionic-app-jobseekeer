import { Component, OnInit } from '@angular/core';
import { Router } from  "@angular/router";
// import { AuthService } from '../auth.service';
import { FileChooser } from '@ionic-native/file-chooser/ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor( private  router:  Router, private fileChooser: FileChooser) { }

  ngOnInit() {
    
  }
  register(form) {
    // this.authService.register(form.value).subscribe((res) => {
    //   this.router.navigateByUrl('home');
    // });
    this.router.navigateByUrl('home');

  }
  fileChoose() {
    this.fileChooser.open()
    .then(uri => console.log(uri))
    .catch(e => console.log(e));
  }
}