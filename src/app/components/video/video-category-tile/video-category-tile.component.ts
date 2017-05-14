import { Component, OnInit, Input, OnChanges } from '@angular/core';
@Component({
  selector: 'nx-video-category-tile',
  templateUrl: './video-category-tile.component.html',
  styleUrls: ['./video-category-tile.component.css']
})
export class VideoCategoryTileComponent implements OnInit {

  @Input() src: any;
  constructor() { }

  ngOnInit() {
  }

}
