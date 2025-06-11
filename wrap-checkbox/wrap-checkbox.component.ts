import {
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormControl,
  FormsModule,
  FormGroup,
} from '@angular/forms';
import { forwardRef, Component, input, model } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapCheckboxComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  imports: [FormsModule, CheckboxModule, ReactiveFormsModule],
  templateUrl: './wrap-checkbox.component.html',
  selector: 'wrap-checkbox',
})
export class WrapCheckboxComponent {
  formGroup = input<FormGroup>(new FormGroup({}));
  formControl = input<FormControl | null>(null);
  disabled = model<boolean>(false);
  readonly = input<boolean>(false);

  inputId = input<string>('');
  ngModel = model<string>('');
  value = input<string>('');
  label = input<string>('');
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
