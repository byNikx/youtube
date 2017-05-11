import { Component } from '@angular/core';

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
    },
  ]
}
