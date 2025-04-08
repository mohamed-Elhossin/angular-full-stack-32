import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainersAdminListComponent } from './trainers-admin-list.component';

describe('TrainersAdminListComponent', () => {
  let component: TrainersAdminListComponent;
  let fixture: ComponentFixture<TrainersAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainersAdminListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainersAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
