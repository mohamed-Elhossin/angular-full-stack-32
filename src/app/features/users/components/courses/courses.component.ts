import { Component } from '@angular/core';
import { CoursesApiService } from '../../../../services/courses-api.service';


@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
})
export class CoursesComponent {
  allData!: any[];
  constructor(private coursesServices: CoursesApiService) {
    this.showdata();
  }

  showdata() {
    this.coursesServices.get().subscribe((data: any) => {
      this.allData = data;
    });
  }
}
