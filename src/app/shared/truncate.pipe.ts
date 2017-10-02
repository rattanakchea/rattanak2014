import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'limitTo'
})
export class TruncatePipe implements PipeTransform {
    transform(input: string, limit: number) {
        if (input) {
            return (input.length > length) ? input.substr(0, limit) + '...' : input;
        }
    }
}