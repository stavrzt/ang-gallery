import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.css'],
    providers: [DataService],
})
export class UsersComponent implements OnInit {
    serviceData;

    constructor(private _dataService: DataService) {
    }

    ngOnInit() {
        this.serviceData = this._dataService.getApiData(`${this._dataService.API}/users`);
    }

}
