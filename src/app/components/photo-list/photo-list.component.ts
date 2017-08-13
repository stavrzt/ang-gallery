import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-photo-list',
    templateUrl: './photo-list.component.html',
    styleUrls: ['./photo-list.component.css'],
    providers: [DataService]
})
export class PhotoListComponent implements OnInit {
    serviceData;
    albumId;

    constructor(private _dataService: DataService, public route: ActivatedRoute) {
    }

    ngOnInit() {
        // get album id from url
        this.route
            .params
            .subscribe(params => {
                this.albumId = params['album_id'];
            });
        // get photos data from album
        this.serviceData = this._dataService.getApiData(`${this._dataService.API}/albums/${this.albumId}`);
    }
}
