import { Album} from '../models/album.model';

export class AlbumAdapter {
  static apply(entity: Object): Album {
    return new Album(
      entity['artistId'],
      entity['artistName'],
      entity['artworkUrl100'],
      entity['collectionCensoredName'],
      entity['collectionId'],
      entity['collectionName'],
      entity['collectionType'],
      entity['trackCount']
    );
  }
}
