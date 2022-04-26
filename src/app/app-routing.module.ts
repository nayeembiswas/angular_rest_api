import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestApiComponent } from './rest-api/rest-api.component';

const routes: Routes = [
  { path: '/', component: RestApiComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
