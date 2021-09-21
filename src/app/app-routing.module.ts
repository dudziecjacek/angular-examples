import { NotFoundComponent } from './not-found/not-found.component';
import { AboutComponent } from './about/about.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses', loadChildren: () => import('./courses/courses.module')
      .then((m) => m.CoursesModule) // module name that contains
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '', redirectTo: 'about', pathMatch: 'full'
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }