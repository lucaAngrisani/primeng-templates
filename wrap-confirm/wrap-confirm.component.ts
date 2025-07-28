import { ConfirmDialog } from 'primeng/confirmdialog';
import { Component } from '@angular/core';
import { ConfirmationService } from 'primeng/api';

@Component({
  templateUrl: './wrap-confirm.component.html',
  selector: 'wrap-confirm',
  imports: [ConfirmDialog],
})
export class WrapConfirmComponent {}
