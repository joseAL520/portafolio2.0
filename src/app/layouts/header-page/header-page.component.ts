import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
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
 }
