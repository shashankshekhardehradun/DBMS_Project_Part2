import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core'
import { AccountService } from './_services';
import { User } from './_models';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'amusement-park';
  user: User = new User;


  constructor(private accountService: AccountService, private router: Router) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.accountService.logout();
    window.location.reload();
  }

  goToBooking() {
    this.router.navigate(['/booking']);
  }
}




