import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseComponent } from './course/course.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesRoutingModule } from './courses-routing.module';


@NgModule({
  declarations: [CourseComponent,
    CoursesListComponent],
  imports: [
    CommonModule,
    CoursesRoutingModule
  ]
})
export class CoursesModule { }
