import {
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormsModule,
  FormGroup,
  ControlValueAccessor,
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
export class WrapRadioButtonComponent implements ControlValueAccessor {
  formGroup = input<FormGroup>(new FormGroup({}));
  formControlName = input<string>('');
  disabled = model<boolean>(false);

  inputId = input<string>('');
  ngModel = model<string>('');
  value = input<string>('');
  name = input<string>('');

  // ControlValueAccessor methods
  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  onChange: (value: string) => void = () => {};
  writeValue(value: string): void {
    this.ngModel.set(value);
  }
  onTouched: () => void = () => {};

  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  onInputChange(val: string): void {
    this.ngModel.set(val);
    this.onChange(val);
    this.onTouched();
  }
}
