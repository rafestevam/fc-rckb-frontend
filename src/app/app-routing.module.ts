import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotPassComponent } from './sign-in/forgot-pass/forgot-pass.component';


const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  {
    path: 'forgot',
    component: ForgotPassComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
