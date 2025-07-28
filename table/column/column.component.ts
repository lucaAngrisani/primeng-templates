import { Component, ContentChild, Input } from '@angular/core';
import { BodyTemplateDirective } from '../directives/body-template.directive';
import { FilterTemplateDirective } from '../directives/filter-template.directive';
import { HeaderTemplateDirective } from '../directives/header-template.directive';
import { TreeRowTemplateDirective } from '../directives/tree-row-template.directive';

@Component({
  standalone: true,
  selector: 'custom-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.css'],
})
export class ColumnComponent {

  @ContentChild(HeaderTemplateDirective) customHeader!: HeaderTemplateDirective;
  @ContentChild(FilterTemplateDirective) customFilter!: FilterTemplateDirective;
  @ContentChild(BodyTemplateDirective) customBody!: BodyTemplateDirective;

  @Input() name!: string;
}
