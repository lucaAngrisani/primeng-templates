import { MegaMenuModule } from 'primeng/megamenu';
import { Component, model } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  templateUrl: './wrap-mega-menu.component.html',
  selector: 'wrap-mega-menu',
  imports: [MegaMenuModule],
})
export class WrapMegaMenuComponent {
  items = model<MenuItem[]>([]);
}
