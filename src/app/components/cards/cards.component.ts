import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Project } from '../../interfaces/projects.interfaces';

@Component({
  selector: 'app-cards',
  imports: [],
  templateUrl: './cards.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardsComponent {

  projects  = input<Project[]>([])

}
