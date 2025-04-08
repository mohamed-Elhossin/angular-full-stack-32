import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminTrainersComponent } from './update-admin-trainers.component';

describe('UpdateAdminTrainersComponent', () => {
  let component: UpdateAdminTrainersComponent;
  let fixture: ComponentFixture<UpdateAdminTrainersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAdminTrainersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdminTrainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
