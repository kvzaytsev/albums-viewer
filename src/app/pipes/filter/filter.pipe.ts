import { Pipe, PipeTransform } from '@angular/core';

import { Album } from '../../models/album.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Album[], mask: string): any {
    if (Array.isArray(value)) {
      return value.filter((entity: Album) => {
        return entity.collectionCensoredName.toLocaleLowerCase().includes(mask.toLocaleLowerCase());
      });
    }

    return value;
  }

}
