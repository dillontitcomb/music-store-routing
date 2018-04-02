import { Injectable } from '@angular/core';
import { Album } from './album.model';
import { ALBUMS } from './mock.albums';

@Injectable()
export class AlbumService {

  constructor() { }

  getAlbums() {
    return ALBUMS;
  }

  getAlbumById(albumId: number) {
    for (var i=0; i<=ALBUMS.length - 1; i++) {
      if (albumId === ALBUMS[i].id) {
        return ALBUMS[i];
      }
    }
  }
}
