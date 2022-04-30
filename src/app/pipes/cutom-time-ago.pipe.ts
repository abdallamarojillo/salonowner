import { Pipe, PipeTransform } from '@angular/core';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';

@Pipe({ 
  name: 'cutomTimeAgo' 
})
export class CustomTimeAgoPipe implements PipeTransform {
  transform(value: any): any {
    TimeAgo.addLocale(en);
    const timeAgo = new TimeAgo('en-US');
    return timeAgo.format(new Date(value));
  }
}


