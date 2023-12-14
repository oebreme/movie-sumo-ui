import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
  /**
   * Always appends dots, except when 'appendDots' is explicitly set to 'false'
   */
export class TruncatePipe implements PipeTransform {

  readonly DOTS: string = '...';

  transform(value: string, targetedLength: number, appendDots?: boolean): string {
    if (appendDots === false) {
      return value.split(' ').slice(0, targetedLength).join(' ');
    }

    return value.split(' ').slice(0, targetedLength).join(' ') + this.DOTS
  }
}
