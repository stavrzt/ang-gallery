import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-photo-detail',
    templateUrl: './photo-detail.component.html',
    styleUrls: ['./photo-detail.component.css'],
    providers: [DataService],
})
export class PhotoDetailComponent implements OnInit {
    serviceData;
    photoId;

    constructor(private _dataService: DataService, public route: ActivatedRoute) {
    }

    ngOnInit() {
        // get photo id from url
        this.route
            .params
            .subscribe(params => {
                this.photoId = params['photo_id'];
            });
        // get photos data from album
        this.serviceData = this._dataService.getApiData(`${this._dataService.API}/photo/${this.photoId}`);
    }
}
