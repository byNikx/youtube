import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-video-suggestion-list',
  templateUrl: './video-suggestion-list.component.html',
  styleUrls: ['./video-suggestion-list.component.css']
})
export class VideoSuggestionListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  suggestions = [
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

}
