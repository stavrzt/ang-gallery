import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {UniquePipe} from './pipes/unique.pipe';
import {UsersComponent} from './components/users/users.component';
import {AlbumsComponent} from './components/albums/albums.component';
import {PhotoListComponent} from './components/photo-list/photo-list.component';
import {PhotoDetailComponent} from './components/photo-detail/photo-detail.component';

import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
    {path: 'users', component: UsersComponent},
    {path: 'users/:user_id/albums', component: AlbumsComponent},
    {path: 'albums/:album_id', component: PhotoListComponent},
    {path: 'photo/:photo_id', component: PhotoDetailComponent},
    {
        path: '*',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];

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
        BrowserModule,
        HttpModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [UniquePipe],
    bootstrap: [AppComponent]
})
export class AppModule {
}
