import { Component } from '@angular/core';
import { HeaderPageComponent } from "./layouts/header-page/header-page.component";
import { FooterPageComponent } from "./layouts/footer-page/footer-page.component";
import { RouterOutlet } from '@angular/router';
import { ExperiencePageComponent } from "./pages/experience-page/experience-page.component";
import { ProjectsPageComponent } from "./pages/projects-page/projects-page.component";
import { SkillsPagesComponent } from "./pages/skills-pages/skills-pages.component";

@Component({
  selector: 'app-root',
  imports: [HeaderPageComponent, FooterPageComponent, ExperiencePageComponent, ProjectsPageComponent, SkillsPagesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio2.0';
}
