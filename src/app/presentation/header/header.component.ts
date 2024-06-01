import { Component } from '@angular/core';
import { NgTemplateOutlet } from "@angular/common";

@Component({
  selector: 'moviesumo-header',
  standalone: true,
  imports: [
    NgTemplateOutlet
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  isLoggedIn: boolean = false;

}
