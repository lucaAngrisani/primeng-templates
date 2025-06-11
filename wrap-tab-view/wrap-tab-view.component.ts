import {
  ContentChildren,
  TemplateRef,
  Component,
  QueryList,
  input,
  model,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TabsModule } from 'primeng/tabs';

import { WrapSpinnerComponent } from '../wrap-spinner/wrap-spinner.component';

@Component({
  imports: [TabsModule, FormsModule, NgTemplateOutlet, WrapSpinnerComponent],
  templateUrl: './wrap-tab-view.component.html',
  selector: 'wrap-tab-view',
})
export class WrapTabsComponent {
  @ContentChildren('panelHeaderTemplate', { read: TemplateRef })
  panelHeaderTemplates!: QueryList<TemplateRef<any>>;
  @ContentChildren('panelTemplate', { read: TemplateRef })
  panelTemplates!: QueryList<TemplateRef<any>>;

  scrollable = input<boolean>(true);
  tabindex = model<number>(0);
}
