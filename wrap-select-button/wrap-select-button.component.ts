import {
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormsModule,
  FormGroup,
} from '@angular/forms';
import { forwardRef, Component, input, model } from '@angular/core';
import { SelectButton } from 'primeng/selectbutton';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapSelectButtonComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  imports: [FormsModule, SelectButton, ReactiveFormsModule],
  templateUrl: './wrap-select-button.component.html',
  selector: 'wrap-select-button',
})
export class WrapSelectButtonComponent {
  formGroup = input<FormGroup>(new FormGroup({}));
  optionDisabled = input<string | null>(null);
  optionLabel = input<string | null>(null);
  optionValue = input<string | null>(null);
  unselectable = input<boolean>(false);
  formControlName = input<string>('');
  disabled = model<boolean>(false);
  ngModel = model<string>('');
  options = input<any[]>([]);
  value = model<string>('');

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
