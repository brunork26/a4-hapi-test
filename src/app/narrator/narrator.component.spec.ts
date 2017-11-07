import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NarratorComponent } from './narrator.component';

describe('NarratorComponent', () => {
  let component: NarratorComponent;
  let fixture: ComponentFixture<NarratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NarratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NarratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
