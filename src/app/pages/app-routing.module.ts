import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index/index.component';

// https://angular.cn/guide/router-reference#configuration
const routes: Routes = [
  { path: "index", component: IndexComponent },
  { path: "", redirectTo: "index", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
