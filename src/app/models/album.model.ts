export class Album {
  public songList: string[];

  static createEmpty() {
    return new Album(
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null
    );
  }

  constructor(
    public artistId: number,
    public artistName: string,
    public artworkUrl100: string,
    public collectionCensoredName: string,
    public collectionId: number,
    public collectionName: string,
    public collectionType: string,
    public trackCount: number,
  ) {
    this.trackCount = trackCount || 0;
    this.songList = [];
  }

  getBigCoverUrl() {
    return this.artworkUrl100
      ? this.artworkUrl100.replace('100x100', '300x300')
      : '';
  }

  getBigCoverUrl2x() {
    return this.artworkUrl100
      ? `${this.artworkUrl100.replace('100x100', '600x600')} 2x`
      : '';
  }

  getBigCoverUrls() {
    return `${this.getBigCoverUrl()}, ${this.getBigCoverUrl2x()}`;
  }

  getSmallCoverUrl() {
    return this.artworkUrl100
      ? this.artworkUrl100
      : '';
  }

  getSmallCoverUrl2x() {
    return this.artworkUrl100
      ? `${this.artworkUrl100.replace('100x100', '200x200')} 2x`
      : '';
  }
}
