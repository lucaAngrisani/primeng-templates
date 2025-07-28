import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  QueryList,
  signal,
  SimpleChanges,
  TemplateRef,
  WritableSignal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { LazyLoadEvent } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { TableLazyLoadEvent, TableModule } from 'primeng/table';
import { Subscription } from 'rxjs';
import { ColumnComponent } from './column/column.component';
import { TableCustomService } from './table.service';
import { TextTableComponent } from './text-table/text-table.component';
import { TreeRowComponent } from './tree-row/tree-row.component';
import { ColumnType } from './types/column.type';
import { PaginatorComponent } from '../paginator/paginator.component';
import { ChipsComponent } from '../chips/chips.component';
import { WrapInputtextComponent } from '../wrap-input-text/wrap-input-text.component';

@Component({
  standalone: true,
  selector: 'custom-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  imports: [
    AsyncPipe,
    TableModule,
    FormsModule,
    ChipsComponent,
    TranslateModule,
    InputTextModule,
    NgTemplateOutlet,
    PaginatorComponent,
    TextTableComponent,
    WrapInputtextComponent,
  ],
})
export class TableComponent implements OnChanges, AfterContentInit {
  @ContentChildren(ColumnComponent) customColumns = new QueryList<ColumnComponent>();
  @ContentChild(TreeRowComponent) customTreeRow = new QueryList<TreeRowComponent>();

  @Input() styleClass: string = '';

  @Input() key: string = (Math.random() * 100).toFixed();
  @Input() itemName: string = 'items';
  @Input() rowsOptions: number[] = [5, 10, 15, 20];

  @Input() lazy: boolean = true;
  @Input() lazyLoadOnInit: boolean = true;

  @Input() translateChipsKey: string = '';
  @Input() paginator: boolean = true;
  @Input() showAlwaysPaginator: boolean = false;
  @Input() showNumTotal: boolean = false;

  @Input() rowClass: string = '';

  @Input() maxItems!: number;

  @Input() columns!: ColumnType[];

  @Input() treeMode: boolean = false;
  @Input() treeTrigger: string | null = null;
  
  treeRowTemplate!: TemplateRef<any>;
  //treeRowTemplate!: TemplateRef<TreeRowComponent>;

  @Output() onLoad: EventEmitter<TableLazyLoadEvent> = new EventEmitter<TableLazyLoadEvent>();
  @Output() onDeleteChip: EventEmitter<string> = new EventEmitter<string>();
  @Output() onDeleteAllChips: EventEmitter<LazyLoadEvent> = new EventEmitter();
  @Output() onRowClick: EventEmitter<any> = new EventEmitter();

  subs: Subscription[] = [];

  constructor(public tableService: TableCustomService) { }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.tableService.tables[this.key]) {
      this.tableService.set(this.key, { rowsOptions: this.rowsOptions, description: this.itemName });
      this.rowsExpanded.set({});
    }

    if (changes['columns'] && changes['columns'].currentValue && !changes['columns'].firstChange) {
      this.insertTemplates();
    }
  }

  ngAfterContentInit() {
    this.insertTemplates();
    this.subs.push(this.tableService.loadTable.subscribe(key => key == this.key && this.onLoad.emit()));
  }

  deleteChip(chip: string) {
    this.tableService.deleteSearchFilter(chip, this.key);
    this.onDeleteChip.emit(chip);
    this.onLoad.emit();
  }

  deleteAllFilters() {
    this.tableService.deleteAllSearchFilter(this.key);
    this.onDeleteAllChips.emit();
    this.onLoad.emit();
  }

  insertTemplates() {
    this.columns = this.columns.map(column => {
      const customTemplates = { ...this.customColumns.find(c => c.name == column.propName) };
      if (customTemplates) {
        column.filterTemplate = customTemplates.customFilter?.template;
        column.bodyTemplate = customTemplates.customBody?.template;
        column.headerTemplate = customTemplates.customHeader?.template;
      }
      return { ...column };
    });

    this.treeRowTemplate = (<any>this.customTreeRow)?.['customTreeRow'].template;
  }

  rowsExpanded: WritableSignal<{ [key: string]: boolean }> = signal({});
  toggleRow(rowIndex: string) {
    this.rowsExpanded()[rowIndex] = !this.rowsExpanded()[rowIndex];
    this.rowsExpanded.set({ ...this.rowsExpanded() });
  }
}
