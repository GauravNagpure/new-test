import { Component } from '@angular/core';
import { Router, Event, NavigationEnd, NavigationStart, NavigationError, NavigationCancel } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
    loading = true;
    constructor(public router: Router) {
        this.router.events.subscribe((event: Event) => {
            if(event instanceof NavigationStart) {
                this.loading = true;
            }

            if(event instanceof NavigationEnd ||
               event instanceof NavigationError ||
               event instanceof NavigationCancel ) {
                this.loading = false;
            }
        })
    }
}