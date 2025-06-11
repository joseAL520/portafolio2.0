import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navar-page',
  imports: [RouterLink],
  templateUrl: './navar-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavarPageComponent { }
