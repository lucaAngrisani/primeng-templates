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
  variant = input<'outlined' | 'text' | null>(null);
  size = input<'small' | 'large' | null>(null);
  loadingIcon = input<string | null>(null);
  styleClass = input<string | null>(null);
  className = input<string | null>(null);
  ariaLabel = input<string | null>(null);
  buttonProps = input<null | any>(null);
  label = input<string | null>(null);
  style = input<object | null>(null);
  badge = input<string | null>(null);
  icon = input<string | null>(null);
  autofocus = input<boolean>(false);
  disabled = input<boolean>(false);
  outlined = input<boolean>(false);
  iconPos = input<string>('left');
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
