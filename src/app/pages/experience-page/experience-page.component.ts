import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule,TranslateService  } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PdfComponent } from "../../components/pdf-components/pdf.component";


@Component({
  selector: 'app-experience-page',
  imports: [TranslateModule, PdfComponent],
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
