import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCategoryTileComponent } from './video-category-tile.component';

describe('VideoCategoryTileComponent', () => {
  let component: VideoCategoryTileComponent;
  let fixture: ComponentFixture<VideoCategoryTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoCategoryTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCategoryTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
