import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSuggestionTileComponent } from './video-suggestion-tile.component';

describe('VideoSuggestionTileComponent', () => {
  let component: VideoSuggestionTileComponent;
  let fixture: ComponentFixture<VideoSuggestionTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSuggestionTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSuggestionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
