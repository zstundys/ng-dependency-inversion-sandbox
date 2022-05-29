import { Pipe, PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';

@Pipe({
  name: 'formatDistanceToNow',
})
export class FormatDistanceToNowPipe implements PipeTransform {
  transform(value: Date | undefined, addSuffix = true): unknown {
    if (!value) {
      return value;
    }

    return formatDistanceToNow(value, { addSuffix });
  }
}
