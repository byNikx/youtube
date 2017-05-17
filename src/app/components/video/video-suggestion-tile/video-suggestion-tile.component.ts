import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'nx-video-suggestion-tile',
  templateUrl: './video-suggestion-tile.component.html',
  styleUrls: ['./video-suggestion-tile.component.css']
})
export class VideoSuggestionTileComponent implements OnInit {

  @Input() suggestion: any;
  constructor() { }


  ngOnInit() {
  }

}
