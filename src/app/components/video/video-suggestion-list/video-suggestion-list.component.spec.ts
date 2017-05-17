import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSuggestionListComponent } from './video-suggestion-list.component';

describe('VideoSuggestionListComponent', () => {
  let component: VideoSuggestionListComponent;
  let fixture: ComponentFixture<VideoSuggestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSuggestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSuggestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
