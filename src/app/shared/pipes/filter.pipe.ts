import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
  transform(items: any[], value: string, firstFilter:string): any[] {
    if (!items) return [];
    if (!value) return  items;
    if (value == '' || value == null) return [];

    return items.filter(e =>
      e[firstFilter].toLowerCase().indexOf(value) > -1
    );
  }
}
