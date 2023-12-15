import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  listName: string = "Favorites";
  savedMovieCount: number = 31;


  list2Name: string = "Liste 5";
}
