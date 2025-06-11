import {
  ContentChildren,
  TemplateRef,
  Component,
  QueryList,
  input,
  model,
} from '@angular/core';
import { AccordionModule } from 'primeng/accordion';
import { NgTemplateOutlet } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WrapSpinnerComponent } from '../wrap-spinner/wrap-spinner.component';

@Component({
  imports: [
    FormsModule,
    AccordionModule,
    NgTemplateOutlet,
    WrapSpinnerComponent,
  ],
  templateUrl: './wrap-accordion.component.html',
  selector: 'wrap-accordion',
})
export class WrapAccordionComponent {
  @ContentChildren('panelHeaderTemplate', { read: TemplateRef })
  panelHeaderTemplates!: QueryList<TemplateRef<any>>;
  @ContentChildren('panelTemplate', { read: TemplateRef })
  panelTemplates!: QueryList<TemplateRef<any>>;

  tabindex = model<number | null>(null);
  multiple = input<boolean>(false);
}
