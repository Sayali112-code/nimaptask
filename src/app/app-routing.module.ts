import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { ProfilescreenComponent } from './profilescreen/profilescreen.component';

const routes: Routes = [
  {path:'', component:HomescreenComponent},
  { path:'profile',component:ProfilescreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
