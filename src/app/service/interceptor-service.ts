import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Observable } from "rxjs";

@Inyectable({
provideIn: 'root'
})
export class InterceptorService {
    constructor(private tokenService: TokenService){}
        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
            let intReq = req;
            const token = this.tokenService.getToken();
            if(token != null){
                intReq = req.clone({
                    headers: req.headers.set('Authorization', 'Bearer' + token)
                });
            }
            return next.handle(intReq);
        }
    }

export const interceptorProvider = [{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
}]

function Inyectable(arg0: { provideIn: string; }): (target: typeof InterceptorService) => void | typeof InterceptorService {
    throw new Error("Function not implemented.");
}

