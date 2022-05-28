import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'formatDistanceToNow',
})
export class FormatDistanceToNowPipe implements PipeTransform {
  transform(value: Date, addSuffix = true): unknown {
    return formatDistanceToNow(value, { addSuffix });
  }
}
