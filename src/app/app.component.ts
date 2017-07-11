import { Component } from '@angular/core';
import { AlbumsService } from './services/albums.service';

import { OnInit } from '@angular/core';
import { Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AlbumsService],
})

export class AppComponent implements OnInit {

  lol;

  constructor(private _albumsService: AlbumsService) {
  }

  ngOnInit() {
    this._albumsService.getData().subscribe((data: Response) => this.lol = data.json());
  }
}
