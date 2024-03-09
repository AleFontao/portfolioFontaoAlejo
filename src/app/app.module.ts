import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from 'src/components/navBar/navBar.component';
import { LandingPageComponent } from 'src/components/landing-page/landing-page.component';
import { PresentationComponent } from 'src/components/presentation/presentation.component';
import { ProjectsComponent } from 'src/components/projects/projects.component';
import { ProjectCardComponent } from 'src/components/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    PresentationComponent,
    ProjectsComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
