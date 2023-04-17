import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthModule } from './core/auth/auth.module';
import { LoginComponent } from './core/auth/login/login.component';
import { DocumentRoutingModule } from './feature/documents/documents-routing.module';

const routes: Routes = [
  { path: '', component: AppComponent },
  //{ path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'documents',
    loadChildren: () => import('./feature/documents/documents.module').then(m => m.DocumentsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
