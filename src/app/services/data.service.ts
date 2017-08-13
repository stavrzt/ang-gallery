import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

    // Link to our api, pointing to localhost
    API = 'http://localhost:3000/api';

    constructor(private _http: Http) {
    }
    // get data from API
    getApiData(apiUrl: string) {
        return this._http.get(apiUrl).map(res => res.json());
    }

}
