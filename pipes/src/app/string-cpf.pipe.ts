import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringCpf',
})
export class StringCpfPipe implements PipeTransform {
  transform(value: string): string {
    const identificacao = value.replace(/[^0-9]/g, '');

    return identificacao.replace(
      /(\d{3})(\d{3})(\d{3})(\d{2})/g,'$1.$2.$3-$4'
    );
  }
}
