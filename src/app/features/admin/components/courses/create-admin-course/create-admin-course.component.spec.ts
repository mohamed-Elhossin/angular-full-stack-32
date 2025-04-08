import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminCourseComponent } from './create-admin-course.component';

describe('CreateAdminCourseComponent', () => {
  let component: CreateAdminCourseComponent;
  let fixture: ComponentFixture<CreateAdminCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAdminCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAdminCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
