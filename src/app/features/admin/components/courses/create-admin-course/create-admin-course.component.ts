import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CoursesApiService } from '../../../../../services/courses-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-admin-course',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './create-admin-course.component.html',
  styleUrls: ['./create-admin-course.component.css', '../../style.css'],
})
export class CreateAdminCourseComponent {
  constructor(
    private FB: FormBuilder,
    private serv: CoursesApiService,
    private router: Router,
    private toaster : ToastrService
  ) {
    this.createForm();
  }

  courseForm!: FormGroup;

  // Ts Validation
  // value , validators
  createForm() {
    this.courseForm = this.FB.group({
      course_name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),

        ],
      ],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      course_image: ['', [Validators.required]],
      teacher_photo: ['', [Validators.required]],
      teacherName: ['', [Validators.required]],
    });
  }


  onsubmit() {
    console.log(this.courseForm.value);
    this.serv.post(this.courseForm.value).subscribe((res: any) => {
      this.toaster.success("Success","Create Course Successfully",{
        timeOut : 1000,
        closeButton : true,
        positionClass :"toast-bottom-right"
      })
      this.router.navigateByUrl('/admins/lc');
    });
  }
}
