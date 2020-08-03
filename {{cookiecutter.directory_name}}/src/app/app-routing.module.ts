import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from './core/services/auth.service';
import { AccessDeniedComponent } from './shared/components/access-denied/access-denied.component';


const routes: Routes = [
  {
    path: 'denied',
    component: AccessDeniedComponent,
  },
  {
    path: '',
    canLoad: [AuthService],
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
