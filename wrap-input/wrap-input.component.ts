import { Validators, FormGroup } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Component, input } from '@angular/core';

@Component({
  templateUrl: './wrap-input.component.html',
  imports: [TranslateModule],
  selector: 'wrap-input',
})
export class WrapInputComponent {
  showRequired = input<boolean>(false);
  hideErrors = input<boolean>(false);
  form = input<FormGroup | null>(null);
  controlName = input<string>('');
  required = Validators.required;
  label = input<string>('');
  icon = input<string>('');
}
