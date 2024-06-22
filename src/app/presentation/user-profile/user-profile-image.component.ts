import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'moviesumo-user-profile-image',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './user-profile-image.component.html',
})
export class UserProfileImageComponent {
  @Input({ required: true }) userImage: string | undefined;
}
