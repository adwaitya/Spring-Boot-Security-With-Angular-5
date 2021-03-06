import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notAuth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
   
  },
  {
    path: 'login',
    component: LoginComponent,
  

  },
  {
    path: 'register',
    component: RegisterComponent,
   
   
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard] // User must be logged in to view this route
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {

}