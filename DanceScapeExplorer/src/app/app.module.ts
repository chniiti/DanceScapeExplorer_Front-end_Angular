import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllTemplateComponent } from './Front/all-template/all-template.component';
import { HeaderComponent } from './Front/header/header.component';
import { FooterComponent } from './Front/footer/footer.component';
import { BodyComponent } from './Front/body/body.component';
import { TrainingsComponent } from './Front/body/trainings/trainings.component';
import { BannerComponent } from './Front/body/banner/banner.component';
import { ClassComponent } from './Front/body/class/class.component';
import { ShowsComponent } from './Front/body/shows/shows.component';
import { ShortCodeComponent } from './Front/body/short-code/short-code.component';
import { ContactComponent } from './Front/body/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    TrainingsComponent,
    BannerComponent,
    ClassComponent,
    ShowsComponent,
    ShortCodeComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
