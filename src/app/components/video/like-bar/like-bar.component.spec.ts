import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeBarComponent } from './like-bar.component';

describe('LikeBarComponent', () => {
  let component: LikeBarComponent;
  let fixture: ComponentFixture<LikeBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikeBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
