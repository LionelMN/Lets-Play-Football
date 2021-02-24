import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualLeagueComponent } from './individual-league.component';

describe('IndividualLeagueComponent', () => {
  let component: IndividualLeagueComponent;
  let fixture: ComponentFixture<IndividualLeagueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndividualLeagueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualLeagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
