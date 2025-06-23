import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skills-pages',
  imports: [],
  templateUrl: './skills-pages.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsPagesComponent { 
  frontend = [
  { title: 'HTML', logo: 'html' },
  { title: 'CSS', logo: 'css' },
  { title: 'JavaScript', logo: 'javascript' },
  { title: 'TypeScript', logo: 'typescript' },
  { title: 'React', logo: 'react' },
  { title: 'Bootstrap', logo: 'bootstrap' },
  { title: 'TailwindCSS', logo: 'tailwindcss' },
  { title: 'PrimeNG', logo: 'primeng' },
  { title: 'DaisyUI', logo: 'daisyui-icon' },
  { title: 'Chart.js', logo: 'chartjs' },
  { title: 'RxJS', logo: 'rxjs' }
];

  backend = [
    { title: 'Supabase', logo: 'supabase' },
    { title: 'API', logo: 'api' }
  ];
  
  tools = [
    { title: 'Git', logo: 'git' },
    { title: 'GitHub', logo: 'github' },
    { title: 'Azure DevOps', logo: 'azuredevops' },
    { title: 'Jira', logo: 'jira' },
    { title: 'Trello', logo: 'trello' },
    { title: 'Postman', logo: 'postman' },
    { title: 'Slack', logo: 'slack' },
    { title: 'Microsoft Teams', logo: 'microsoftteams' }
  ];
  
  nexts = [
    { title: 'Node.js', logo: 'nodejs' },
    { title: 'Vercel', logo: 'vercel' },
    { title: 'Docker', logo: 'docker' },
  ]
}
