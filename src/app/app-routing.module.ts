import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { AuthPageComponent } from './modules/auth/pages/auth-page/auth-page.component';


export const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m => m.HomeModule)

  }, {
    path: '',
    component: AuthPageComponent,
    loadChildren: () => import(`./modules/auth/auth.module`).then(m => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
