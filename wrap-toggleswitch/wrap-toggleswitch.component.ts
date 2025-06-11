import {
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormsModule,
  FormGroup,
} from '@angular/forms';
import { ToggleSwitchChangeEvent, ToggleSwitch } from 'primeng/toggleswitch';
import { forwardRef, Component, output, input, model } from '@angular/core';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapToggleswitchComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  imports: [FormsModule, ToggleSwitch, ReactiveFormsModule],
  templateUrl: './wrap-toggleswitch.component.html',
  selector: 'wrap-toggleswitch',
})
export class WrapToggleswitchComponent {
  formGroup = input<FormGroup>(new FormGroup({}));
  onChange = output<ToggleSwitchChangeEvent>();

  falseValue = input<boolean | string>(false);
  trueValue = input<boolean | string>(true);

  ngModel = model<boolean | string>(false);
  formControlName = input<string>('');
  disabled = model<boolean>(false);
  readonly = input<boolean>(false);

  value = model<string>('');

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  // ControlValueAccessor methods
  writeValue(value: string): void {
    this.value.set(value || '');
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  registerOnChange(fn: (value: string) => void): void {}

  private onTouched: () => void = () => {};
}
