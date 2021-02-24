import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPlayerComponent } from './individual-player.component';

describe('IndividualPlayerComponent', () => {
  let component: IndividualPlayerComponent;
  let fixture: ComponentFixture<IndividualPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
