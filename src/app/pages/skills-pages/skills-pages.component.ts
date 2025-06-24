import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule,TranslateService} from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-skills-pages',
  imports: [TranslateModule, CommonModule],
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


  cognitive: SafeHtml[] = [];
  mindset: SafeHtml[] = [];

  constructor(
    private translate: TranslateService,
    private sanitizer: DomSanitizer
  ) {
    this.loadDescriptions();

    this.translate.onLangChange.subscribe(() => {
      this.loadDescriptions();
    });
  }

  private loadDescriptions() {
    this.translate.get('personalTraits.cognitive').subscribe((list) => {

      if (Array.isArray(list)) {
        this.cognitive = list.map((html) =>
          this.sanitizer.bypassSecurityTrustHtml(html)
        );
      } else {
        console.error('La clave "cognitive" no es un array:', list);
        this.cognitive = [];
      }
    });

    this.translate.get('personalTraits.mindset').subscribe((list) => {

      if (Array.isArray(list)) {
        this.mindset = list.map((html) =>
          this.sanitizer.bypassSecurityTrustHtml(html)
        );
      } else {
        console.error('La clave "mindset" no es un array:', list);
        this.mindset = [];
      }
    });
  }


  getBadgeClass(index: number): string {
    const classes = ['badge-accent', 'badge-primary', 'badge-secondary'];
    return classes[index % classes.length];
  }

}
