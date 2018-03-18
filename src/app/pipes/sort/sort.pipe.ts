import { Pipe, PipeTransform } from '@angular/core';

import { Album } from '../../models/album.model';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Album[], direction: number): any {
    if (Array.isArray(value)) {
      return value.sort((a: Album, b: Album) => {
        return a.collectionCensoredName.localeCompare(b.collectionCensoredName) * direction;
      });
    }

    return value;
  }

}
