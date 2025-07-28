import { NgModule } from '@angular/core';
import { ColumnComponent } from './column/column.component';
import { BodyTemplateDirective } from './directives/body-template.directive';
import { FilterTemplateDirective } from './directives/filter-template.directive';
import { HeaderTemplateDirective } from './directives/header-template.directive';
import { TreeRowTemplateDirective } from './directives/tree-row-template.directive';
import { TableComponent } from './table.component';
import { TreeRowComponent } from './tree-row/tree-row.component';

@NgModule({
  imports: [
    TableComponent,
    ColumnComponent,
    TreeRowComponent,
    BodyTemplateDirective,
    FilterTemplateDirective,
    HeaderTemplateDirective,
    TreeRowTemplateDirective,
  ],
  exports: [
    TableComponent,
    ColumnComponent,
    TreeRowComponent,
    BodyTemplateDirective,
    FilterTemplateDirective,
    HeaderTemplateDirective,
    TreeRowTemplateDirective,
  ],
})
export class TableCustomModule {}
