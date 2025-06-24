import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { Project } from '../../interfaces/projects.interfaces';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CardsComponent, TranslateModule],
  templateUrl: './projects-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {
  projects: Project[] = [];

  constructor(private translate: TranslateService) {
    this.loadProjects();
    this.translate.onLangChange.subscribe(() => this.loadProjects());
  }

  loadProjects() {
    this.translate.get([
      'projects.simulator',
      'projects.simulatorDesc',
      'projects.mentalPortal',
      'projects.mentalPortalDesc',
      'projects.interviewTool',
      'projects.interviewToolDesc'
    ]).subscribe((t) => {
      this.projects = [
        {
          title: t['projects.simulator'],
          description: t['projects.simulatorDesc'],
          imageUrl: 'https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1630',
          techIcons: ['angular', 'mundo'],
          github: 'https://github.com/joseAL520/Dash',
          liveDemo: 'https://joseal520.github.io/Dash/'
        },
        {
          title: t['projects.mentalPortal'],
          description: t['projects.mentalPortalDesc'],
          imageUrl: 'https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1630',
          techIcons: ['s', 'mundo'],
          github: 'https://github.com/joseAL520/Dash',
          liveDemo: 'https://joseal520.github.io/Dash/'
        },
        {
          title: t['projects.interviewTool'],
          description: t['projects.interviewToolDesc'],
          imageUrl: 'https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1630',
          techIcons: ['s', 'mundo'],
          github: 'https://github.com/joseAL520/Dash',
          liveDemo: 'https://joseal520.github.io/Dash/'
        }
      ];
    });
  }
}
