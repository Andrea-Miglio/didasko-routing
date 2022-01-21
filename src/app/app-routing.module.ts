import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PipeComponent } from './pipe/pipe.component';

import { HookComponent } from './hook/hook.component';


const routes: Routes = [
  
 
  { path: 'pipe', component: PipeComponent },
  { path: 'hooks', component: HookComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
