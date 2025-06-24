import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '../../interfaces/projects.interfaces';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-cards',
  imports: [TranslateModule],
  templateUrl: './cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {

  projects  = input<Project[]>([])

}
