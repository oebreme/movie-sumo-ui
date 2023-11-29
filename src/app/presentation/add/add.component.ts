import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { debounceTime, Subject } from "rxjs";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  userInput: string = '';
  inputSubject: Subject<void> = new Subject<void>();
  list: any;

  constructor(private readonly http: HttpClient) {
  }

  ngOnInit(): void {
    console.log('ngOnInit called at ~~~ ' + new Date().toLocaleString());
    this.inputSubject.pipe(debounceTime(500))
      .subscribe(() => {
      console.log('called API ~~~ ' + new Date().toLocaleString());
      this.callTmdb();
    })
  }

  buildImgUrl(e: string): string {
    return "https://image.tmdb.org/t/p/w500/" + e;
  }

  callTmdb(): void {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZmRjMWEzZDM1MTIyYWE3MjgyZmVlNTlmNmQwOTAzNiIsInN1YiI6IjY1M2NkOTVmNzE5YWViMDBmZTNjNzY4YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QK-5wspCxMBkDCnQj5elVym5CYN_rOBDg_w_-UYB2HY')
    headers = headers.append('Content-Type', 'application/json');

    this.http.get('https://api.themoviedb.org/3/search/movie?query=' + this.userInput + '&include_adult=false&language=en-US&page=1',
      {headers: headers}, ).subscribe((data) => {
        this.list = data;
      console.log(data);
    });
  }


}
