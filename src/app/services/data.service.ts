import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    constructor(private _http: Http) {
    }

    get () {
        return this._http.get('assets/albums.json').map(res => res.json());
    }

}
