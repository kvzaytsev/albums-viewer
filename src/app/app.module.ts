import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AlbumListComponent } from './components/album-list/album-list.component';
import { AlbumComponent } from './components/album/album.component';
import { AlbumDetailsComponent } from './components/album-details/album-details.component';
import {ITunesService} from './services/itunes.service';
import { AlbumFiltersComponent } from './components/album-filters/album-filters.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';

const appRoutes: Routes = [
  {
    path: 'albums',
    component: AlbumListComponent,
    data: { title: 'Albums List' }
  },
  {
    path: 'album/:id',
    component: AlbumDetailsComponent
  },
  { path: '',
    redirectTo: '/albums',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    AlbumListComponent,
    AlbumComponent,
    AlbumDetailsComponent,
    AlbumFiltersComponent,
    SortPipe,
    FilterPipe
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [ITunesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
