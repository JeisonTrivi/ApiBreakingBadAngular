import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { Router, RouterModule } from '@angular/router';

const routes = [
{
  path: '',
  component: MainPageComponent,
},
{
  path:'**',
  redirectTo: '/',
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
