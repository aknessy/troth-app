import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({name: 'ellipsis'})
export class TextEllipsisPipe implements PipeTransform {
  transform(value: string, allowedLength : number = 25): string {
    if(value && value.length > 25){
      return value.substring(0, allowedLength) + '...';
    }

    return value;
  }
}
