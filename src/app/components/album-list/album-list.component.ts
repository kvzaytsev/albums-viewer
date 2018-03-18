import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ITunesService } from '../../services/itunes.service';
import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  albums: Album[];
  sortDirection = 'asc';
  filterMask = '';

  constructor(
    private router: Router,
    private itunesService: ITunesService
  ) { }

  ngOnInit() {
    this.itunesService
      .getAlbumList()
      .subscribe(data => {
        this.albums = data;
      }, error => {
        console.error(error);
      });
  }

  onViewAlbum(album: Album) {
    const link = ['/album', album.collectionId];
    this.router.navigate(link);
  }

  onSortChange(dir: string) {
    this.sortDirection = dir;
  }

  onFilterChange(mask: string) {
    this.filterMask = mask;
  }

  get direction() {
    return this.sortDirection === 'asc' ? 1 : -1;
  }

  get mask() {
    return this.filterMask || '';
  }
}
