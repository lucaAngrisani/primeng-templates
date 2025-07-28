import { Component, ContentChild } from '@angular/core';
import { TreeRowTemplateDirective } from '../directives/tree-row-template.directive';

@Component({
  standalone: true,
  selector: 'custom-tree-row',
  templateUrl: './tree-row.component.html',
  styleUrls: ['./tree-row.component.css'],
})
export class TreeRowComponent {
  @ContentChild(TreeRowTemplateDirective)
  customTreeRow!: TreeRowTemplateDirective;

  elementRef!: any;
  createEmbeddedView!: any;
}
