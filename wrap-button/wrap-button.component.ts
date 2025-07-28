import { Component, output, input } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  // hotfix because icon only buttons have different heights compared to those with labels
  styles: [
    `
      :host ::ng-deep .p-button.p-button-icon-only {
        padding: 0.8rem;
        width: auto !important;
      }
    `,
  ],
  templateUrl: './wrap-button.component.html',
  selector: 'wrap-button',
  imports: [Button],
})
export class WrapButtonComponent {
  badgeSeverity = input<
    | 'secondary'
    | 'contrast'
    | 'success'
    | 'primary'
    | 'danger'
    | 'info'
    | 'warn'
    | 'help'
    | null
  >(null);

  severity = input<
    | 'secondary'
    | 'contrast'
    | 'success'
    | 'primary'
    | 'danger'
    | 'info'
    | 'warn'
    | 'help'
    | null
  >(null);
  variant = input<'outlined' | 'text' | undefined>(undefined);
  size = input<'small' | 'large' | undefined>(undefined);
  loadingIcon = input<string | undefined>(undefined);
  styleClass = input<string | undefined>(undefined);
  className = input<string | null>(null);
  ariaLabel = input<string | undefined>(undefined);
  buttonProps = input<null | any>(null);
  label = input<string | undefined>(undefined);
  style = input<object | null>(null);
  badge = input<string | undefined>(undefined);
  icon = input<string | undefined>(undefined);
  autofocus = input<boolean>(false);
  disabled = input<boolean>(false);
  outlined = input<boolean>(false);
  iconPos = input<'left' | 'right' | 'top' | 'bottom'>('left');
  loading = input<boolean>(false);
  rounded = input<boolean>(false);
  raised = input<boolean>(false);
  onClick = output<MouseEvent>();
  onFocus = output<FocusEvent>();
  fluid = input<boolean>(false);

  onBlur = output<FocusEvent>();
  text = input<boolean>(false);
  link = input<boolean>(false);
}
