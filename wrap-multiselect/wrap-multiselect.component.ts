import {
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormsModule,
  FormGroup,
} from '@angular/forms';
import { forwardRef, Component, input, model } from '@angular/core';
import { MultiSelect } from 'primeng/multiselect';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapMultiselectComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  imports: [MultiSelect, FormsModule, ReactiveFormsModule],
  templateUrl: './wrap-multiselect.component.html',
  selector: 'wrap-multiselect',
})
export class WrapMultiselectComponent {
  filterMatchMode = input<
    | 'startsWith'
    | 'notEquals'
    | 'contains'
    | 'endsWith'
    | 'equals'
    | 'lte'
    | 'gte'
    | 'gt'
    | 'lt'
    | 'in'
  >('contains');
  optionDisabled = input<undefined | string>(undefined);
  optionLabel = input<undefined | string>(undefined);
  optionValue = input<undefined | string>(undefined);
  formGroup = input<FormGroup>(new FormGroup({}));
  filterBy = input<undefined | string>(undefined);
  size = input<'small' | 'large' | null>(null);
  filterFields = input<any>(['optionLabel']);
  maxSelectedLabels = input<number>(3);
  formControlName = input<string>('');
  disabled = model<boolean>(false);
  readonly = input<boolean>(false);
  placeholder = input<string>('');
  filter = input<boolean>(true);
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
