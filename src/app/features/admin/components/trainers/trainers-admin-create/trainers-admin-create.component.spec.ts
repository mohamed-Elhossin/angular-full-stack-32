import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersAdminCreateComponent } from './trainers-admin-create.component';

describe('TrainersAdminCreateComponent', () => {
  let component: TrainersAdminCreateComponent;
  let fixture: ComponentFixture<TrainersAdminCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainersAdminCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainersAdminCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
