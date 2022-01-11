import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsHomeComponent } from './flights-home/flights-home.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: SearchComponent
      },
      {
        path: 'flight/:path',
        component: FlightsHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
