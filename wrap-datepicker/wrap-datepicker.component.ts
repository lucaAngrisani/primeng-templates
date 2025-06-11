import {
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormsModule,
  FormGroup,
} from '@angular/forms';
import { forwardRef, Component, output, input, model } from '@angular/core';
import { DatePickerTypeView, DatePicker } from 'primeng/datepicker';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapDatepickerComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  imports: [DatePicker, FormsModule, ReactiveFormsModule],
  templateUrl: './wrap-datepicker.component.html',
  selector: 'wrap-datepicker',
})
export class WrapDatepickerComponent {
  formGroup = input<FormGroup>(new FormGroup({}));
  view = input<DatePickerTypeView>('date');

  selectionMode = input<string | null>(null);
  dateFormat = input<string | null>(null);

  readonlyInput = input<boolean>(false);
  formControlName = input<string>('');
  minDate = input<Date | null>(null);
  maxDate = input<Date | null>(null);

  showClear = input<boolean>(false);

  disabled = model<boolean>(false);
  readonly = input<boolean>(false);

  showIcon = input<boolean>(false);

  showTime = input<boolean>(false);
  timeOnly = input<boolean>(false);

  onSelect = output<Date | null>();
  value = model<string>('');

  ngModel = model<number>();
  onClear = output<null>();

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
