import {
  ContentChild,
  TemplateRef,
  forwardRef,
  Component,
  output,
  input,
  model,
} from '@angular/core';
import {
  ReactiveFormsModule,
  NG_VALUE_ACCESSOR,
  FormsModule,
  FormGroup,
} from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NgTemplateOutlet } from '@angular/common';
import { Select } from 'primeng/select';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapSelectComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  imports: [
    Select,
    FormsModule,
    TranslateModule,
    NgTemplateOutlet,
    ReactiveFormsModule,
  ],
  templateUrl: './wrap-select.component.html',
  selector: 'wrap-select',
})
export class WrapSelectComponent<T> {
  @ContentChild('selectedItemTemplate', { read: TemplateRef })
  selectedItemTemplate!: TemplateRef<any>;
  @ContentChild('itemTemplate', { read: TemplateRef })
  itemTemplate!: TemplateRef<any>;
  optionDisabled = input<undefined | string>(undefined);
  optionLabel = input<undefined | string>(undefined);
  optionValue = input<undefined | string>(undefined);
  formGroup = input<FormGroup>(new FormGroup({}));
  filterBy = input<undefined | string>(undefined);
  size = input<'small' | 'large' | null>(null);
  virtualScrollItemSize = input<number>(37);
  virtualScroll = input<boolean>(true);
  formControlName = input<string>('');
  disabled = model<boolean>(false);
  readonly = input<boolean>(false);
  editable = input<boolean>(false);
  showClear = input<boolean>(true);
  placeholder = input<string>('');
  filter = input<boolean>(false);

  options = input<any[]>([]);

  onChange = output<Event>();

  value = model<string>('');
  ngModel = model<T>();

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  registerOnChange(fn: (value: string) => void): void {}

  // ControlValueAccessor methods
  writeValue(value: string): void {
    this.value.set(value || '');
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  private onTouched: () => void = () => {};
}
