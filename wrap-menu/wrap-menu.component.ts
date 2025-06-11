import { Component, model } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './wrap-menu.component.html',
  selector: 'wrap-menu',
  imports: [MenuModule],
})
export class WrapMenuComponent {
  items = model<MenuItem[]>([]);
}
