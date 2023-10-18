import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exec'
})
export class ExecPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  transform(fn: Function, ...args: any[]): any {
    return fn(...args);
  }
}

@Pipe({
  name: 'toComaDecimal'
})
export class ToComaDecimalPipe implements PipeTransform {
  transform(value: number | string): string {
    if (typeof (value) === 'number') {
      value = value.toString();
    }
    if (typeof (value) === 'string') {
      return value.replace(/\./g, ',');
    }
    return value;
  }
}

export const PIPES_NUMERICOS = [ ToComaDecimalPipe, ExecPipe, ]
