import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgOptimizedImage, NgTemplateOutlet } from '@angular/common';
import { AuthService, User } from '@auth0/auth0-angular';
import { take } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'moviesumo-header',
  standalone: true,
  imports: [NgTemplateOutlet, AsyncPipe, NgOptimizedImage, RouterLink],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  user: User | null | undefined;

  constructor(protected readonly auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.pipe(take(1)).subscribe((user) => {
      this.user = user;
    });
  }
}
