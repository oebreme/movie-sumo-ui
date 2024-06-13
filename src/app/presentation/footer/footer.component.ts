import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import packageJson from '../../../../package.json';

@Component({
  selector: 'moviesumo-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  version: string = packageJson.version;
}
