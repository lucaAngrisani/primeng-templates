import { Component, input } from '@angular/core';
import { Card } from 'primeng/card';

@Component({
  templateUrl: './wrap-card.component.html',
  selector: 'wrap-card',
  imports: [Card],
})
export class WrapCardComponent {
  styleClass = input<string | undefined>(undefined);
  className = input<string | undefined>(undefined);
  header = input<string | undefined>(undefined);
}
