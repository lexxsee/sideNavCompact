import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  //  canActivate: [AuthGuardService]
  },

  {
    path: '**',
    redirectTo: 'home',
  //  canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
 // providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
