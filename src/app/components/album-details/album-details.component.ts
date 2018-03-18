import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationExtras } from '@angular/router';
import { Location } from '@angular/common';

import { switchMap } from 'rxjs/operators';

import { ITunesService } from '../../services/itunes.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {

  album: Album;
  show = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private itunesService: ITunesService
  ) { }

  ngOnInit() {
    this.album = Album.createEmpty();
    this.route.paramMap
      .pipe(switchMap((params: Params) => this.itunesService.getAlbumWithSongs(+params.get('id'))))
      .subscribe(
        album => {
          this.album = album;
          this.show = true;
        }, error => {
          console.error(error);
        }
      );
  }
}
