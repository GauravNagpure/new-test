import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { AlbumComponent } from './album/album.component';

import { UserResolver } from './app.service';
import { AlbumResolver } from './app.service';
import { PhotoResolver } from './app.service';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
    declarations: [
      AppComponent,
      UserComponent,
      AlbumComponent,
      PhotoComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
  ],
    providers : [],
  bootstrap: [AppComponent]
})
export class AppModule { }
