import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderList',
  standalone: true
})
export class OrderListPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
