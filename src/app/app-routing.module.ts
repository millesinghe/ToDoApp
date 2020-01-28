import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { TodosComponent } from './todos/todos.component';
import { RouteGuardService } from './service/route-guard.service';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent, canActivate : [RouteGuardService] },
  { path:'todo', component : TodosComponent, canActivate : [RouteGuardService]},
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
