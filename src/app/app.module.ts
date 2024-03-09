import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { heroBookOpen } from '@ng-icons/heroicons/outline';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from 'src/components/navBar/navBar.component';
import { LandingPageComponent } from 'src/components/landing-page/landing-page.component';
import { PresentationComponent } from 'src/components/presentation/presentation.component';
import { ProjectsComponent } from 'src/components/projects/projects.component';
import { ProjectCardComponent } from 'src/components/project-card/project-card.component';
import { CertificationCardComponent } from 'src/components/certification-card/certification-card.component';
import { NgIconsModule } from '@ng-icons/core';
import { CertificationsComponent } from 'src/components/certifications/certifications.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    PresentationComponent,
    ProjectsComponent,
    ProjectCardComponent,
    CertificationsComponent,
    CertificationCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ heroBookOpen  }),
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
