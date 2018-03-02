import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ButtonComponent } from './shared/button/button.component';
import { RegularDirective } from './regular.directive';
import { BigDirective } from './big.directive';
import { DisableDirective } from './disable.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ButtonComponent,
    RegularDirective,
    BigDirective,
    DisableDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
