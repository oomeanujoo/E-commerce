import { Component, OnInit } from '@angular/core';
import { Event, RouterEvent, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
    {
      title: 'Home',
      url: '/menu/home'
    },
    {
      title: 'Logout',
      url: '/menu/login'
    }
  ]

  selectedPath = '';

  constructor(public router: Router) {
    router.events.pipe(
      filter((event: Event): event is RouterEvent => event instanceof RouterEvent)
    ).subscribe((event: RouterEvent) => {
      this.selectedPath = event.url
    });

  }

  ngOnInit() {
  }

}
