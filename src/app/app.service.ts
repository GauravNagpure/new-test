import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment'
import { Observable } from 'rxjs';

class Load {
    constructor(public http: HttpClient) {}
    request(path, method='get') {
        path = environment.apiUrl + path;
        return this.http[method](path)
    }
}

@Injectable()
export class UserResolver extends Load implements Resolve<any> {
    constructor(public http: HttpClient) {
        super(http);
    }

    resolve(route: ActivatedRouteSnapshot):Observable<any> {
        return this.request('/users/');
    }
}


@Injectable()
export class AlbumResolver extends Load implements Resolve<any> {
    constructor(public http: HttpClient) {
        super(http);
    }

    resolve(route: ActivatedRouteSnapshot):Observable<any> {
        let userId = route.params['id'] ? route.params['id'] : null;
        let path = userId ? '/albums/?userId='+ userId : /albums/;

        return this.request(path);
    }
}

@Injectable()
export class PhotoResolver extends Load implements Resolve<any> {
    constructor(public http: HttpClient) {
        super(http);
    }

    resolve(route: ActivatedRouteSnapshot):Observable<any> {
        let albumId = route.params['id'] ? route.params['id'] : null;
        let path = albumId ? '/photos/?albumId='+ albumId : /photos/;

        return this.request(path)

    }
}
