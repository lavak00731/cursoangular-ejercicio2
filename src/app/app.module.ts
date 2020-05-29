import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { LogOutComponent } from './components/log-out/log-out.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './modules/core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogOutComponent,
    HomeComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
