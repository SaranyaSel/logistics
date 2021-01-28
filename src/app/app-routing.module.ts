import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlldataComponent } from './alldata/alldata.component';
import { ExpdataComponent } from './expdata/expdata.component';
import { ImpdataComponent } from './impdata/impdata.component';


const routes: Routes = [
  // { path: '', redirectTo: '/importing', pathMatch: 'full' },
  // { path: 'importing', component: ImpdataComponent },
  // { path: 'exporting', component: ExpdataComponent },
  // { path: 'allocating', component: AlldataComponent },
  // { path: '**', redirectTo: '/importing', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
