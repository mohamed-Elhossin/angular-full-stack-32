import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadminCourseComponent } from './listadmin-course.component';

describe('ListadminCourseComponent', () => {
  let component: ListadminCourseComponent;
  let fixture: ComponentFixture<ListadminCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadminCourseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadminCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
