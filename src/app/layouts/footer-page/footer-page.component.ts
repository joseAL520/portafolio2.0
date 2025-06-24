import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer-page',
  imports: [TranslateModule],
  templateUrl: './footer-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterPageComponent { }
