import { ReactiveFormsModule, NG_VALUE_ACCESSOR, FormsModule, FormGroup } from '@angular/forms';
import { forwardRef, Component, input, model } from '@angular/core';
import { InputMask } from 'primeng/inputmask';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapMaskComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  imports: [InputMask, FormsModule, ReactiveFormsModule],
  templateUrl: './wrap-mask.component.html',
  selector: 'wrap-mask',
})
export class WrapMaskComponent {

  formGroup = input<FormGroup>(new FormGroup({}));
  size = input<"small" | "large" | null>(null);
  formControlName = input<string>('');
  disabled = model<boolean>(false);
  readonly = input<boolean>(false);
  placeholder = input<string>('');
  ngModel = model<string>('');
  value = model<string>('');
  mask = input<string>('');

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

  private onChange: (value: string) => void = () => { };
  private onTouched: () => void = () => { };
}
