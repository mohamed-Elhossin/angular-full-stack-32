import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdminCourseComponent } from './update-admin-course.component';

describe('UpdateAdminCourseComponent', () => {
  let component: UpdateAdminCourseComponent;
  let fixture: ComponentFixture<UpdateAdminCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateAdminCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateAdminCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
