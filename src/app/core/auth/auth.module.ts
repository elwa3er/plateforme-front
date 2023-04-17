//les modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AngularMaterialModule} from '../../shared/angular-material.module';
import {BrowserAnimationsModule} from'@angular/platform-browser/animations'
import { AuthRoutingModule } from './auth-routing.module';

//les services
import { AuthService } from './auth.service';
//les composants
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [LoginComponent, ResetPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [
    AuthService
  ],
  exports: [LoginComponent, ResetPasswordComponent],
})
export class AuthModule {}
