import { ReactiveFormsModule, NG_VALUE_ACCESSOR, FormsModule, FormGroup } from '@angular/forms';
import { forwardRef, Component, input, model } from '@angular/core';
import { Rating } from 'primeng/rating';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapRatingComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  imports: [Rating, FormsModule, ReactiveFormsModule],
  templateUrl: './wrap-rating.component.html',
  selector: 'wrap-rating',
})
export class WrapRatingComponent {
  formGroup = input<FormGroup>(new FormGroup({}));

  formControlName = input<string>('');
  disabled = model<boolean>(false);

  readonly = input<boolean>(false);
  ngModel = model<number>(0);

  value = model<string>('');
  stars = model<number>(5);

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
