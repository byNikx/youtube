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
  videos = [
    {
      thumb: 'https://i.ytimg.com/vi/j5-yKhDd64s/hqdefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=67&sigh=WiQRAoZbxFPkjVnZONJ-AdinSkA'
    },{
      thumb: 'https://i.ytimg.com/vi/zUzd9KyIDrM/hqdefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=67&sigh=ceCVfxMlu0IvZXXPpb8ZLwL510E'
    },{
      thumb: 'https://i.ytimg.com/vi/3zPvfVmL0nE/hqdefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=67&sigh=iaxx9gIG7A1QHhqo7PoC9sjf6j8'
    },{
      thumb: 'https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=67&sigh=a5reHxrqsrsRm0ZxAQFv_JzXmIk'
    },{
      thumb: 'https://i.ytimg.com/vi/1w7OgIMMRc4/hqdefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=67&sigh=u0_Wq5k19Ezvbb3DSVcONY9bC24'
    },{
      thumb: 'https://i.ytimg.com/vi/opU1urLhw50/hqdefault.jpg?custom=true&w=246&h=138&stc=true&jpg444=true&jpgq=90&sp=67&sigh=OL6dJkq_6XCqiRwPJdpc2Ql2Am8'
    }
  ]

  links: any [] = [
    new Link('Home', '/home', 'home'),
    new Link('Trending', '/trending', 'whatshot'),
    new Link('History', '/history', 'history')
  ]

  boyt: any [] = [
    new Link('Music', '/music', 'music_note'),
    new Link('Sports', '/sports', 'golf_course'),
    new Link('Gaming', '/gaming', 'home'),
    new Link('Movies', '/movies', 'home'),
    new Link('TV Shows', '/tv-shows', 'home'),
    new Link('News', '/news', 'home'),
    new Link('Live', '/live', 'home'),
    new Link('Spotlight', '/spotlight', 'home'),
    new Link('360 Video', '/360-video', 'home')
  ];

  extraLinks: any [] = [
    new Link('Settings', '/settings', 'settings'),
    new Link('Help', '/help', 'help'),
    new Link('Feedback', '/feedback', 'feedback')
  ]

}
