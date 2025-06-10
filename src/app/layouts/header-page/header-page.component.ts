import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavarPageComponent } from "../../components/navar-page/navar-page.component";

@Component({
  selector: 'app-header-page',
  imports: [NavarPageComponent],
  templateUrl: './header-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderPageComponent { }
