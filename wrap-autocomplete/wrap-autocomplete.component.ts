import {
  AutoCompleteCompleteEvent,
  AutoCompleteUnselectEvent,
  AutoCompleteSelectEvent,
  AutoComplete,
} from 'primeng/autocomplete';
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
import { NgTemplateOutlet } from '@angular/common';

@Component({
  providers: [
    {
      useExisting: forwardRef(() => WrapAutocompleteComponent),
      provide: NG_VALUE_ACCESSOR,
      multi: true,
    },
  ],
  imports: [FormsModule, AutoComplete, NgTemplateOutlet, ReactiveFormsModule],
  templateUrl: './wrap-autocomplete.component.html',
  selector: 'wrap-autocomplete',
})
export class WrapAutocompleteComponent {
  @ContentChild('selectedItemTemplate', { read: TemplateRef })
  selectedItemTemplate!: TemplateRef<any>;
  @ContentChild('headerTemplate', { read: TemplateRef })
  headerTemplate!: TemplateRef<any>;
  @ContentChild('footerTemplate', { read: TemplateRef })
  footerTemplate!: TemplateRef<any>;
  @ContentChild('itemTemplate', { read: TemplateRef })
  itemTemplate!: TemplateRef<any>;
  optionDisabled = input<undefined | string>(undefined);
  completeMethod = output<AutoCompleteCompleteEvent>();
  optionLabel = input<undefined | string>(undefined);
  optionValue = input<undefined | string>(undefined);
  onUnselect = output<AutoCompleteUnselectEvent>();
  formGroup = input<FormGroup>(new FormGroup({}));
  formControlName = input<string | null>(null);
  size = input<'small' | 'large' | null>(null);
  onSelect = output<AutoCompleteSelectEvent>();
  completeOnFocus = input<boolean>(false);
  forceSelection = input<boolean>(false);
  disabled = model<boolean>(false);

  readonly = input<boolean>(false);
  multiple = input<boolean>(false);
  typeahead = input<boolean>(true);
  placeholder = input<string>('');
  fluid = input<boolean>(true);

  ngModel = model<string>('');
  options = input<any[]>([]);
  value = model<string>('');
  onBlur = output<Event>();

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
