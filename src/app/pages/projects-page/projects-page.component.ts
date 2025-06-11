import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardsComponent } from "../../components/cards/cards.component";
import { Project } from '../../interfaces/projects.interfaces';

@Component({
  selector: 'app-projects-page',
  imports: [CardsComponent],
  templateUrl: './projects-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {

  projects:Project[] = [
    {
      title: 'Proyect',
      description: 'Creación de una aplicación móvil...',
      imageUrl: 'https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1630',
      techIcons: ['s', 'mundo'],
      github: 'https://github.com/joseAL520/Dash',
      liveDemo: 'https://joseal520.github.io/Dash/'
    },
     {
      title: 'Proyect',
      description: 'Creación de una aplicación móvil...',
      imageUrl: 'https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1630',
      techIcons: ['s', 'mundo'],
      github: 'https://github.com/joseAL520/Dash',
      liveDemo: 'https://joseal520.github.io/Dash/'
    },
     {
      title: 'Proyect',
      description: 'Creación de una aplicación móvil...',
      imageUrl: 'https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1630',
      techIcons: ['s', 'mundo'],
      github: 'https://github.com/joseAL520/Dash',
      liveDemo: 'https://joseal520.github.io/Dash/'
    },
     {
      title: 'Proyect',
      description: 'Creación de una aplicación móvil...',
      imageUrl: 'https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1630',
      techIcons: ['s', 'mundo'],
      github: 'https://github.com/joseAL520/Dash',
      liveDemo: 'https://joseal520.github.io/Dash/'
    },
     {
      title: 'Proyect',
      description: 'Creación de una aplicación móvil...',
      imageUrl: 'https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1630',
      techIcons: ['s', 'mundo'],
      github: 'https://github.com/joseAL520/Dash',
      liveDemo: 'https://joseal520.github.io/Dash/'
    }
  ] 
   

;



}
