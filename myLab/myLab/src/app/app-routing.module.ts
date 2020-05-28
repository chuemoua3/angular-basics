
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'one', component: CompOneComponent},
  {path: 'two', component: CompTwoComponent},
  {path: 'three', component: CompThreeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
