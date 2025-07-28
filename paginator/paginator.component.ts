import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModel } from '../table/template.model';
import { TranslateModule } from '@ngx-translate/core';
import { PaginatorModule as PaginatorModuleNG } from 'primeng/paginator';
import { FormsModule } from '@angular/forms';
import { WrapSelectComponent } from '../wrap-select/wrap-select.component';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
  imports: [
    FormsModule,
    TranslateModule,
    PaginatorModuleNG,
    WrapSelectComponent,
  ],
})
export class PaginatorComponent {
  @Input() table!: TableModel;
  @Output() load = new EventEmitter();

  @Input() numTotal?: number;
  @Input() numFiltered!: number;

  @Input() showAlwaysPaginator: boolean = false;

  @Input() maxItems?: number;

  @Input() key = new Date().getTime();

  visible: boolean = true;

  get indexMinRowOption() {
    return this.table?.rowsOptions?.indexOf(
      Math.min(...this.table?.rowsOptions),
    );
  }
}
