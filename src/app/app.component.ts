import { Component } from '@angular/core';


class Link{
  label: string;
  icon: string;
  url: string;
  constructor(_label: string, _url: string, _icon?:string){
    this.label = _label;
    this.url = _url;
    this.icon = _icon;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  

  links: any [] = [
    new Link('Home', '/home', 'home'),
    new Link('Trending', '/trending', 'whatshot'),
    new Link('History', '/history', 'history')
  ]

  boyt: any [] = [
    new Link('Music', '/music', 'music_note'),
    new Link('Sports', '/sports', 'golf_course'),
    // new Link('Gaming', '/gaming', 'home'),
    // new Link('Movies', '/movies', 'home'),
    // new Link('TV Shows', '/tv-shows', 'home'),
    // new Link('News', '/news', 'home'),
    // new Link('Live', '/live', 'home'),
    // new Link('Spotlight', '/spotlight', 'home'),
    // new Link('360 Video', '/360-video', 'home')
  ];

  extraLinks: any [] = [
    new Link('Settings', '/settings', 'settings'),
    new Link('Help', '/help', 'help'),
    new Link('Feedback', '/feedback', 'feedback')
  ]

}
