import { Component } from '@angular/core';
import { HeaderPageComponent } from "./layouts/header-page/header-page.component";
import { FooterPageComponent } from "./layouts/footer-page/footer-page.component";

@Component({
  selector: 'app-root',
  imports: [ HeaderPageComponent, FooterPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portafolio2.0';
}
