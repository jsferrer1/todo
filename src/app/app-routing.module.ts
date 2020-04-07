import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';

const routes: Routes = [
  { path: '', component: LoginComponent }, // default url
  { path: 'login', component: LoginComponent },
  { path: 'welcome/:name', component: WelcomeComponent },
  { path: 'todos', component: ListTodosComponent },
  { path: '**', component: ErrorComponent } // error handling MUST be last
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
