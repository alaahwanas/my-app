import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { ElementryComponent } from './elementry/elementry.component';
import { MiddleComponent } from './middle/middle.component';
import { AppRoutingModule } from './/app-routing.module';
import { Home0Component } from './home0/home0.component';
import { RouterModule, Routes } from '@angular/router';
import { HighComponent } from './high/high.component';
import { FirstgradeComponent } from './firstgrade/firstgrade.component';
import { DonateComponent } from './donate/donate.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AllbooksComponent } from './allbooks/allbooks.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'' , redirectTo: 'home0', pathMatch: 'full' },
  {path:'home0' , component:Home0Component},
  {path:'elementry' , component:ElementryComponent},
  {path:'middle' , component:MiddleComponent},
  {path:'high' , component:HighComponent},
  {path:'firstgrade' , component:FirstgradeComponent},
  {path:'donate' , component:DonateComponent},
  {path:'allbooks' , component:AllbooksComponent},
  {path:'login' , component:LoginComponent},
  {path:'signup' , component:SignupComponent},




];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    ElementryComponent,
    MiddleComponent,
    Home0Component,
    HighComponent,
    FirstgradeComponent,
    DonateComponent,
    LoginComponent,
    SignupComponent,
    AllbooksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
