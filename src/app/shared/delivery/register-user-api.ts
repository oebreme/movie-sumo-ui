import { Observable } from "rxjs";
import { RegisterUserDto } from "../../delivery/rest/register-user.dto";

export interface RegisterUserApi {
  registerUser<T extends RegisterUserDto>(arg: T): Observable<any>;
}
