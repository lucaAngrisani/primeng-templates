import {
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormsModule,
  FormGroup,
} from '@angular/forms';
import { forwardRef, Component, output, input, model } from '@angular/core';
import { InputText } from 'primeng/inputtext';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapInputtextComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  imports: [InputText, FormsModule, ReactiveFormsModule],
  templateUrl: './wrap-input-text.component.html',
  selector: 'wrap-input-text',
})
export class WrapInputtextComponent {
  formGroup = input<FormGroup>(new FormGroup({}));
  size = input<'small' | 'large' | null>(null);
  maxlength = input<number | null>(null);
  formControlName = input<string>('');
  disabled = model<boolean>(false);
  readonly = input<boolean>(false);
  autocomplete = input<string>('');
  placeholder = input<string>('');
  className = input<string>('');
  type = input<'text'>('text');
  ngModel = model<string>('');
  value = model<string>('');

  onBlur = output<void>();

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
