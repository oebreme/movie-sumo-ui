import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  listName: string = "Favorites";
  savedMovieCount: number = 31;

  securedAPIResponse?: Object;
  publicApiResponse?: Object;

  constructor(private readonly http: HttpClient) {
    this.http.get("https://movie-sumo-gateway.oebreme.dev/api/private").subscribe(
      (data) => {
        this.securedAPIResponse = data;
        console.log(data)
      }
    );
    this.http.get("https://movie-sumo-gateway.oebreme.dev/api/public").subscribe(
      (data) => {
        this.publicApiResponse = data;
        console.log(data)
      }
    )
  }
}
