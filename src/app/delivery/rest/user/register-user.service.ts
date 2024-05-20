import {Inject, Injectable} from '@angular/core';
import { AuthService, User } from "@auth0/auth0-angular";
import { HttpClient } from "@angular/common/http";
import { RegisterUserApi } from "./register-user-api";
import {Observable, of} from 'rxjs';
import {GATEWAY_BASE_URL} from "../../../config/gateway.config";
import {RegisterUserDto} from "./register-user.dto";
import {UserDto} from "./user.dto";

// TODO:
//  - this service is supposed to make a call to the gateway - which in turn will call the database/backend to
//  - ... see if the user is already known or if its a new one
//  -
//  - background is = the database doesnt know about users, at all.
//  - this register-call should create a new user in database with DEFAULT-settings, a empty favorites list, etc..

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService implements RegisterUserApi {

  constructor(private readonly auth: AuthService,
              private readonly http: HttpClient,
              @Inject(GATEWAY_BASE_URL) private readonly endpoint: string) {

    this.auth.user$.subscribe((user) => {
      console.log(user);

      function registerUser(user: User | null | undefined) {
        return http.post('http://localhost:8081/api/v3/users', {
          email: user?.email,
          userName: user?.nickname,
          profilePictureUrl: user?.picture
        });
      }

      registerUser(user).subscribe((data) => {
        console.log("received user from db / gateway:");

        console.log(data)

      });
      console.log("DONE");
    });
  }

  public registerUser(registerUser: RegisterUserDto): Observable<UserDto> {
    return of();
    // return this.http.post<MovieSumoUserDto>(
    //   `${this.endpoint}/api/v2/users`
    // ).pipe(map(response => ))
  }
}
