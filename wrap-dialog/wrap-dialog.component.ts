import { Component, input, model } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { Dialog } from 'primeng/dialog';

@Component({
  templateUrl: './wrap-dialog.component.html',
  imports: [Dialog, TranslateModule],
  selector: 'wrap-dialog',
})
export class WrapDialogComponent {
  visible = model<boolean>(false);
  header = input<string>('');
  position = input<
    | 'bottomright'
    | 'bottomleft'
    | 'topright'
    | 'topleft'
    | 'bottom'
    | 'center'
    | 'right'
    | 'left'
    | 'top'
    | null
  >(null);
}
