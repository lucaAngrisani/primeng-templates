import { forwardRef, Component, input, model } from '@angular/core';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { Knob } from 'primeng/knob';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapKnobComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  templateUrl: './wrap-knob.component.html',
  imports: [Knob, FormsModule],
  selector: 'wrap-knob',
})
export class WrapKnobComponent {
  valueTemplate = input<string | null>(null);

  styleClass = input<string | null>(null);
  valueColor = input<string | null>(null);
  rangeColor = input<string | null>(null);
  className = input<string | null>(null);
  name = input<string | null>(null);
  disabled = model<boolean>(false);
  showValue = input<boolean>(true);
  strokeWidth = input<number>(14);
  readonly = input<boolean>(true);
  tabindex = input<number>(0);
  ngModel = model<number>();
  size = input<number>(100);

  // ControlValueAccessor methods
  value = model<string>('');
  max = input<number>(100);

  step = input<number>(1);

  min = input<number>(0);
  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  writeValue(value: string): void {
    this.value.set(value || '');
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private onChange: (value: string) => void = () => {};
  private onTouched: () => void = () => {};
}
