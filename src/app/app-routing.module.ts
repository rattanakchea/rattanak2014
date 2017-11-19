import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkComponent } from './work/work.component';
import { WorkDetailComponent } from './work-detail/work-detail.component';
import { StoreService } from './services/store.service'

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'work',
    resolve: { projects: StoreService },
    children: [
      { path: '', component: WorkComponent },
      {
        path: ':id',
        component: WorkDetailComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
