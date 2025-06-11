import {
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormsModule,
  FormGroup,
} from '@angular/forms';
import { forwardRef, Component, input, model } from '@angular/core';
import { ColorPicker } from 'primeng/colorpicker';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapColorPickerComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  imports: [ColorPicker, FormsModule, ReactiveFormsModule],
  templateUrl: './wrap-colorpicker.component.html',
  selector: 'wrap-colorpicker',
})
export class WrapColorPickerComponent {
  formGroup = input<FormGroup>(new FormGroup({}));
  formControlName = input<string>('');

  disabled = model<boolean>(false);
  readonly = input<boolean>(false);

  value = model<string>('');
  ngModel = model<number>();

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // ControlValueAccessor methods
  writeValue(value: string): void {
    this.value.set(value || '');
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
}
