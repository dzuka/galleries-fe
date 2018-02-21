import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearhPageGalleryComponent } from './searh-page-gallery.component';

describe('SearhPageGalleryComponent', () => {
  let component: SearhPageGalleryComponent;
  let fixture: ComponentFixture<SearhPageGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearhPageGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearhPageGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
