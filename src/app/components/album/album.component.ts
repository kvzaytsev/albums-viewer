import {
  Component,
  EventEmitter,
  Input,
  Output,
  HostListener
} from '@angular/core';

import { Album } from '../../models/album.model';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent {
  @Input() album: Album;
  @Output() viewAlbum = new EventEmitter<Album>();

  @HostListener('click')
  onAlbumClick() {
    this.viewAlbum.emit(this.album);
  }

  constructor() {}
}
