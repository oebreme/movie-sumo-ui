import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import packageJson from '../../../../package.json';
import { AuthService, User } from '@auth0/auth0-angular';
import { take } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'moviesumo-footer',
  standalone: true,
  imports: [RouterLink, AsyncPipe],
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  version: string = packageJson.version;
  user: User | null | undefined;

  constructor(protected readonly auth: AuthService) {}

  ngOnInit(): void {
    this.auth.user$.pipe(take(1)).subscribe((user) => {
      this.user = user;
    });
  }
}
