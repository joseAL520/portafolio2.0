import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navar-page',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './navar-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavarPageComponent {
  isEnglish = false;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  onToggle(event: Event) {
    this.isEnglish = (event.target as HTMLInputElement).checked;
    const lang = this.isEnglish ? 'en' : 'es';
    this.changeLang(lang);
  }

  changeLang(lang: string) {

    this.translate.use(lang);
  }

  clipboard() {
    const textarea = "jose.albelt1817@gmail.com";
    navigator.clipboard.writeText(textarea).then(() => {  
    }).catch((err) => {
      console.error('Error al copiar al portapapeles: ', err);
    });
  }
}
