import { Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'stringCpf',
})
export class StringCpfPipe implements PipeTransform {
  transform(value: string): string {
    // 123.456.789-10
    

    //usando substring
    const cpf = value.substring(0,3) + "." + value.substring(3,6) + "." + value.substring(6,9) + "-" + value.substring(9,11)

    //usando regex
    const cpf2 = value.replace(/([0-9]{3})([0-9]{3})([0-9]{3})([0-9]{2})/,'$1.$2.$3-$4')

    return cpf
    
  }
}
