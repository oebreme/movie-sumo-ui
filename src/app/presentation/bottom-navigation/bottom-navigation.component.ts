import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { take } from 'rxjs';
import { AuthService, User } from '@auth0/auth0-angular';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'moviesumo-bottom-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './bottom-navigation.component.html',
})
export class BottomNavigationComponent implements OnInit {
  user: User | null | undefined;

  constructor(protected readonly auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.pipe(take(1)).subscribe((user) => {
      this.user = user;
    });
  }
}
