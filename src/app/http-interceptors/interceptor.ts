import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MycookieService } from "../auth/mycookie.service";

@Injectable()
export class Interceptor implements HttpInterceptor {

    constructor(private cookieService: MycookieService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        var value = this.cookieService.getCookie();
        if (value.length) {
            
            const authReq = req.clone({ setHeaders: { Authorization: value } });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}
