import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainCircleComponent } from './components/main-circle/main-circle.component';
import { CircleComponent } from './components/circle/circle.component';


const routes: Routes = [

  {path: 'circles', component: MainCircleComponent},
  {path: '', redirectTo: 'circles', pathMatch: 'full'},
  {
    path: 'circle/:id',
    canActivate: [],
    component: MainCircleComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
