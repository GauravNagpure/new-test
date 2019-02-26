import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { AlbumComponent } from './album/album.component';
import { PhotoComponent } from './photo/photo.component';

import { UserResolver, AlbumResolver, PhotoResolver } from './app.service';

const routes: Routes = [
    {
        path: 'album/:id/photo',
        component: PhotoComponent,
        resolve: {'photo': PhotoResolver}
    }, {
        path: 'user/:id/album',
        component: AlbumComponent,
        resolve: {'album': AlbumResolver}
    }, {
        path: 'user',
        component: UserComponent,
        resolve: {'user': UserResolver}
    }, {
        path: 'photo',
        component: PhotoComponent,
        resolve: {'photo': PhotoResolver}
    }, {
        path: 'album',
        component: AlbumComponent,
        resolve: {'album': AlbumResolver}
    },{
        path: '',
        component: UserComponent,
        resolve: {'user': UserResolver}
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: [UserResolver, AlbumResolver, PhotoResolver]
})
export class AppRoutingModule { }
