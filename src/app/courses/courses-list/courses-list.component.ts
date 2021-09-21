import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { COURSES } from 'src/server/db-data';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  courses: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.courses = COURSES;
    console.log(this.courses);
  }

}
