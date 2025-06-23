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
    title: 'Simulador de inversión inteligente',
    description: 'Aplicación web que permite simular estrategias de inversión con lógica personalizada, análisis de ROI y visualizaciones interactivas.',
    imageUrl: 'https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1630',
    techIcons: ['s', 'mundo'], // reemplaza por íconos reales si los tienes
    github: 'https://github.com/joseAL520/Dash',
    liveDemo: 'https://joseal520.github.io/Dash/'
  },
  {
    title: 'Portal de salud mental empresarial',
    description: 'Plataforma enfocada en el bienestar emocional dentro del entorno laboral, con recursos, test y seguimiento de empleados.',
    imageUrl: 'https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1630',
    techIcons: ['s', 'mundo'],
    github: 'https://github.com/joseAL520/Dash',
    liveDemo: 'https://joseal520.github.io/Dash/'
  },
  {
    title: 'Analizador de entrevistas técnicas',
    description: 'Herramienta para evaluar respuestas en entrevistas técnicas mediante criterios automatizados y reportes de desempeño.',
    imageUrl: 'https://images.unsplash.com/photo-1659079631665-eb95370fb173?q=80&w=1630',
    techIcons: ['s', 'mundo'],
    github: 'https://github.com/joseAL520/Dash',
    liveDemo: 'https://joseal520.github.io/Dash/'
  }
  ] 
   

;



}
