import { ChangeDetectionStrategy, Component, ElementRef, signal, ViewChild } from '@angular/core';
import { NavarPageComponent } from "../../components/navar-page/navar-page.component";
import { TranslateModule ,TranslateService} from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PdfComponent } from "../../components/pdf-components/pdf.component";


@Component({
  selector: 'app-header-page',
  imports: [NavarPageComponent, TranslateModule, PdfComponent],
  templateUrl: './header-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPageComponent {

 summaryHtml: SafeHtml = ''
 defaultText: string = 'jose.albelt1817@gmail.com';
 @ViewChild('textarea') textarea!: ElementRef<HTMLTextAreaElement>;

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
    this.translate.get('header.summary').subscribe((text: string) => {
      this.summaryHtml = this.sanitizer.bypassSecurityTrustHtml(text);
    });
  }
  
  clipboard() {
    const textarea = this.defaultText;
    navigator.clipboard.writeText(textarea).then(() => {
      const tooltip = document.getElementById('tooltip');
      if (tooltip) {
        tooltip.classList.add('opacity-100', 'visible');
        tooltip.classList.remove('opacity-0', 'invisible');

        setTimeout(() => {
          tooltip.classList.add('opacity-0', 'invisible');
          tooltip.classList.remove('opacity-100', 'visible');
        }, 2000);
      }
    }).catch((err) => {
      console.error('Error al copiar al portapapeles: ', err);
    });
  }
 }
