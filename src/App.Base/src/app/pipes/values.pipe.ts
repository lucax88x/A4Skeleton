import { Pipe, PipeTransform } from '@angular/core';
import * as _ from 'lodash';

@Pipe({
  name: 'values'
})
export class ValuesPipe implements PipeTransform {

  transform(value: {}, args?: any): {}[] {
    return _.values(value);
  }

}
