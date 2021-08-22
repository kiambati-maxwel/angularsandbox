import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close.component';

const routes: Routes = [{ path: 'open', component: OpenCloseComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
