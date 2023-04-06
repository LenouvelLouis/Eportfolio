import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnalInformationComponent } from './personnal-information.component';

describe('PersonnalInformationComponent', () => {
  let component: PersonnalInformationComponent;
  let fixture: ComponentFixture<PersonnalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonnalInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonnalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
