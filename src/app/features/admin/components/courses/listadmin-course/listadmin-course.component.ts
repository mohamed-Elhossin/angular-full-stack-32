import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CoursesApiService } from '../../../../../services/courses-api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listadmin-course',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listadmin-course.component.html',
  styleUrls: ['./listadmin-course.component.css', '../../style.css'],
})
export class ListadminCourseComponent {
  allData!: any[];
  constructor(
    private coursesServices: CoursesApiService,
    private toaster: ToastrService
  ) {
this.showdata();
  }

  showdata(){
    this.coursesServices.get().subscribe((data: any) => {
      this.allData = data;
    });
  }

  remove(id: any) {
    this.coursesServices.delete(id).subscribe((res) => {
      this.showdata();
      this.toaster.success('Delete', 'Delete Couse Successully');

    });
  }
}
