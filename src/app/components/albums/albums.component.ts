import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
    selector: 'app-albums',
    templateUrl: './albums.component.html',
    styleUrls: ['./albums.component.css'],
    providers: [DataService]
})
export class AlbumsComponent implements OnInit {
    serviceData;

    constructor(private _dataService: DataService) {
    }

    ngOnInit() {
        this.serviceData = this._dataService.get();
    }

}
