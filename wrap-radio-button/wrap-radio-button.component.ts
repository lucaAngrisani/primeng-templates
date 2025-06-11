import {
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormsModule,
  FormGroup,
} from '@angular/forms';
import { forwardRef, Component, input, model } from '@angular/core';
import { RadioButton } from 'primeng/radiobutton';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapRadioButtonComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  imports: [RadioButton, FormsModule, ReactiveFormsModule],
  templateUrl: './wrap-radio-button.component.html',
  selector: 'wrap-radio-button',
})
export class WrapRadioButtonComponent {
  formGroup = input<FormGroup>(new FormGroup({}));
  formControlName = input<string>('');
  disabled = model<boolean>(false);

  readonly = input<boolean>(false);
  inputId = input<string>('');
  ngModel = model<string>('');
  value = input<string>('');
  name = input<string>('');

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  // ControlValueAccessor methods
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private onChange: (value: string) => void = () => {};
  private writeValue(value: string): void {}
  private onTouched: () => void = () => {};
}
