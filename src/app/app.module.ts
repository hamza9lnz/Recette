import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { SituationComponent } from './situation/situation.component';
import { CardModule } from 'primeng/card';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {CalendarModule} from 'primeng/calendar';
import {ToastModule} from 'primeng/toast';
import { RapprochementComponent } from './rapprochement/rapprochement.component';
import {DividerModule} from 'primeng/divider';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    SituationComponent,
    RapprochementComponent,
    AcceuilComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    BrowserAnimationsModule,
    CalendarModule,
    ToastModule,
    DividerModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
