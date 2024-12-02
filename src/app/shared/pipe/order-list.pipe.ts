import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList',
  standalone: true
})
export class OrderListPipe implements PipeTransform {

  transform(value: TrackModel[], args: string | null = null, sort: string = 'asc')  : TrackModel[] {
    console.log('->', value);
    console.log('args: ', args);
    console.log('sort: ', sort)
    return value;
  }

}
