import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import { UniquePipe } from './pipes/unique.pipe';
import { UsersComponent } from './components/users/users.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { PhotoListComponent } from './components/photo-list/photo-list.component';
import { PhotoDetailComponent } from './components/photo-detail/photo-detail.component';



@NgModule({
    declarations: [
        AppComponent,
        UniquePipe,
        UsersComponent,
        AlbumsComponent,
        PhotoListComponent,
        PhotoDetailComponent
    ],
    imports: [
        BrowserModule, HttpModule
    ],
    providers: [UniquePipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
