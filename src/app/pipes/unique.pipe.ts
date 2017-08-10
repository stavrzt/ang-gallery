import {Pipe, PipeTransform} from '@angular/core';
import * as _ from 'lodash';

@Pipe({
    name: 'unique'
})
export class UniquePipe implements PipeTransform {

    transform(items: any[], args: any[]): any {
        // return only unique values from array of object
        return _.uniqBy(items, args);
    }

}
