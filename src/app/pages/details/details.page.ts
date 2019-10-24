import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  book: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
      console.log(JSON.stringify(params));
      if (this.router.getCurrentNavigation().extras.state) {
        this.book = this.router.getCurrentNavigation().extras.state.user;
        console.log(JSON.stringify(this.book)+'===============')
      }
    });
   }

  ngOnInit() {
  }

  startAudio() {
    let navigationExtras: NavigationExtras = {
      state: {
        user: 'bookData',
      }
    };
    this.router.navigate(['audioplayer'], navigationExtras);
  }

}
