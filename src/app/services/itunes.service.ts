import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';

import { Album } from '../models/album.model';
import { AlbumAdapter } from '../adapters/album.adapter';
import { ALBUM, SONG } from '../common/wrapper-types';

@Injectable()
export class ITunesService {
  private baseUrl = 'https://itunes.apple.com/lookup';
  private theBeatlesId = 136975;

  constructor(private http: HttpClient) {}

  getAlbumList(): Observable<Album[]> {
    return this.http.get(`${this.baseUrl}?id=${this.theBeatlesId}&entity=album`)
      .map(resp => resp['results'])
      .map(data => data.filter(entity => entity['wrapperType'] === ALBUM))
      .map(data => data.map(AlbumAdapter.apply));
  }

  getAlbumWithSongs(id: number): Observable<Album> {
    const url = `${this.baseUrl}?id=${id}&entity=song`;
    return this.http.get(url)
      .map(resp => {
        return resp['results'];
      })
      .map(data => {
        if (data.length) {
          const album = AlbumAdapter.apply(data.find(entity => entity['wrapperType'] === ALBUM));
          const songList = data.filter(entity => entity['wrapperType'] === SONG).map(entity => entity['trackCensoredName']);
          album.songList.push(...songList);
          return album;
        }

        throw Error('Cannot retrieve the Album');
      });
  }
}
