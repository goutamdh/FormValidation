import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppValidateUserNameDirective } from './app-validate-user-name.directive';
import { PasswordPatternDirective } from './directives/password-pattern.directive';
import { MatchPassworDirective } from './directives/match-passwor.directive';
import { MatchPasswordDirective } from './directives/match-password.directive';

@NgModule({
  declarations: [
    AppComponent,
    AppValidateUserNameDirective,
    PasswordPatternDirective,
    MatchPassworDirective,
    MatchPasswordDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
