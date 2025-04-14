import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CoursesApiService } from '../../../../../services/courses-api.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-admin-course',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './update-admin-course.component.html',
  styleUrls: ['./update-admin-course.component.css', '../../style.css'],
})
export class UpdateAdminCourseComponent {
  id!: any;
  constructor(
    private FB: FormBuilder,
    private serv: CoursesApiService,
    private router: Router,
    private toaster: ToastrService,
    private activeRoute: ActivatedRoute
  ) {
    this.createForm();
    this.id = activeRoute.snapshot.paramMap.get('id');

    this.serv.getById(this.id).subscribe((data: any) => {
 
  this.courseForm.patchValue(data);
    });
  }

  courseForm!: FormGroup;

  // Ts Validation
  // value , validators
  createForm() {
    this.courseForm = this.FB.group({
      course_name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      course_image: ['', [Validators.required]],
      teacher_photo: ['', [Validators.required]],
      teacherName: ['', [Validators.required]],
    });
  }

  onsubmit() {
    console.log(this.courseForm.value);
    this.serv.put(this.id, this.courseForm.value).subscribe((res: any) => {
      this.toaster.success('Success', 'Update Course Successfully', {
        timeOut: 1000,
        closeButton: true,
        positionClass: 'toast-bottom-right',
      });
      this.router.navigateByUrl('/admins/lc');
    });
  }
}
