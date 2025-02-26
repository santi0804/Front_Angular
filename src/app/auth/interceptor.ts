import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = this.authService.obtenerToken();
        if (token) {
            const reqClonada = req.clone({
                setHeaders: { Authorization: `Bearer ${token}` },
            });
            return next.handle(reqClonada);
        }
        return next.handle(req);
    }
}
