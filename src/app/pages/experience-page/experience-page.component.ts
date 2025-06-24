import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule,TranslateService  } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-experience-page',
  imports: [TranslateModule],
  templateUrl: './experience-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencePageComponent {

  descriptions: SafeHtml[] = [];

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
    this.translate.get('experience.description').subscribe((list) => {

      if (Array.isArray(list)) {
        this.descriptions = list.map((html) =>
          this.sanitizer.bypassSecurityTrustHtml(html)
        );
      } else {
        console.error('La clave "description" no es un array:', list);
        this.descriptions = [];
      }
    });
  }

 }
