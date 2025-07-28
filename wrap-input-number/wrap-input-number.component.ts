import {
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormsModule,
  FormGroup,
} from '@angular/forms';
import { forwardRef, Component, input, model } from '@angular/core';
import { InputNumber } from 'primeng/inputnumber';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapInputNumberComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  imports: [InputNumber, FormsModule, ReactiveFormsModule],
  templateUrl: './wrap-input-number.component.html',
  selector: 'wrap-input-number',
})
export class WrapInputNumberComponent {
  currencyDisplay = input<undefined | string>(undefined);
  formGroup = input<FormGroup>(new FormGroup({}));
  currency = input<undefined | string>(undefined);
  size = input<'small' | 'large' | null>(null);
  step = input<number>(1);
  min = input<number>(0);
  max = input<number>(100);
  buttonLayout = input<string>('stacked');
  maxlength = input<number>(10);
  formControlName = input<string>('');
  showButtons = input<boolean>(false);
  disabled = model<boolean>(false);
  readonly = input<boolean>(false);
  placeholder = input<string>('');
  mode = input<string>('decimal');
  ngModel = model<number>();
  value = model<number>();
  className = input<string>('w-full');
  inputStyle = input<unknown>({});

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  // ControlValueAccessor methods
  writeValue(value: number): void {
    this.value.set(value);
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
}
