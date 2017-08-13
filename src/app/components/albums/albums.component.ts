import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.css'],
    providers: [DataService]
})
export class AlbumsComponent implements OnInit {
    serviceData;
    userId;

    constructor(private _dataService: DataService, public route: ActivatedRoute) {
    }

    ngOnInit() {
        // get user id from url
        this.route
            .params
            .subscribe(params => {
                this.userId = params['user_id'];
            });
        // get user albums data
        this.serviceData = this._dataService.getApiData(`${this._dataService.API}/users/${this.userId}/albums`);
    }
}
