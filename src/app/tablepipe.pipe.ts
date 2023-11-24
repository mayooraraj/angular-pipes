import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tablepipe'
})
export class TablepipePipe implements PipeTransform {

  transform(name: string, gender: string): string {
    const title = gender === 'male' ? 'Mr.' : 'Mrs.';
    return `${title} ${name}`;
  }

}
