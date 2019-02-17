import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {AuthService} from "../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log("INTERCEPTED !!!" + req);

    let newRequest;

    this.auth.getToken()
      .then( resp => {
        console.log(resp);
        newRequest = req.clone({params: req.params.set('auth', <string>resp)});
        console.log(newRequest.params)
        return next.handle(newRequest);
      })
      .catch(error => {
        console.log(error);
        return next.handle(req);
      });
    return next.handle(req);
  }

}
