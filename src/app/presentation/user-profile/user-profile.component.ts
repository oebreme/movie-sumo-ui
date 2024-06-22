import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { User } from '@auth0/auth0-angular';
import { UserProfileImageComponent } from './user-profile-image.component';

@Component({
  selector: 'moviesumo-profile',
  standalone: true,
  imports: [NgOptimizedImage, UserProfileImageComponent],
  templateUrl: './user-profile.component.html',
})
export class UserProfileComponent {
  @Input() user: User | undefined | null;
  @Output() logout: EventEmitter<any> = new EventEmitter<any>();

  onLogout(): void {
    this.logout.emit();
  }
}
