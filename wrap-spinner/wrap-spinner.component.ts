import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Component, input } from '@angular/core';

@Component({
  templateUrl: './wrap-spinner.component.html',
  imports: [ProgressSpinnerModule],
  selector: 'wrap-spinner',
})
export class WrapSpinnerComponent {
  innerStyle = input<any>({ height: '50px', width: '50px' });
}
