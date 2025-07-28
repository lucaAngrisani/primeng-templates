import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject, Subject, debounceTime } from 'rxjs';
import { TableModel } from './template.model';
import { TableLazyLoadEvent } from 'primeng/table';

@Injectable({
  providedIn: 'root',
})
export class TableCustomService {
  tables: {
    [key: string]: TableModel;
  } = {};

  loadTable: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  set<T>(
    key: string,
    config?: {
      defaultRowsNum?: number;
      rowsOptions?: number[];
      loading?: boolean;
      description?: string;
    },
  ) {
    let defConfig: {
      defaultRowsNum?: number;
      rowsOptions?: number[];
      loading?: boolean;
      description?: string;
    } = {
      defaultRowsNum: 5,
      rowsOptions: [5, 10, 15],
      loading: false,
      description: 'elementi',
    };

    defConfig.defaultRowsNum =
      config?.defaultRowsNum ??
      config?.rowsOptions?.[0] ??
      defConfig.defaultRowsNum;
    defConfig.rowsOptions = config?.rowsOptions ?? defConfig.rowsOptions;
    defConfig.description = config?.description ?? defConfig.description;
    defConfig.loading = config?.loading ?? defConfig.loading;

    if (!this.tables[key]) {
      this.tables[key] = {
        description: defConfig.description,
        currPage: 0,
        firstToShow: 0,
        loading: !!defConfig.loading,
        rowsNum: defConfig.defaultRowsNum!,
        rowsOptions: defConfig.rowsOptions ?? [],
        totalRecords: 0,
        totalBeforeFilter: 0,
        filters: {},
        sortField: undefined,
        sortOrder: 1,
        searchFiltered: [],
        checkedList: [],
        value: new BehaviorSubject<T[]>([]),
      };
    }
  }

  getData(
    evt: TableLazyLoadEvent,
    key: string,
  ): {
    first: number;
    rows: number;
    sortField: string | undefined;
    sortOrder: number;
    filters: { [key: string]: any };
  } {
    evt?.sortField && (this.tables[key].sortField = evt.sortField as string);
    evt?.sortOrder && (this.tables[key].sortOrder = evt.sortOrder);

    this.tables[key].searchFiltered = [];

    this.updateSearchFiltered(key);
    return {
      first:
        this.tables[key].firstToShow % this.tables[key].rowsNum! == 0
          ? this.tables[key].firstToShow
          : Math.floor(
              this.tables[key].firstToShow / this.tables[key].rowsNum!,
            ),
      rows: this.tables[key].rowsNum!,
      sortField: this.tables[key].sortField,
      sortOrder: this.tables[key].sortOrder,
      filters: this.tables[key].filters,
    };
  }

  updateSearchFiltered(key: string) {
    if (this.tables[key].filters) {
      Object.entries(this.tables[key].filters).forEach((e: any) => {
        if (e[1] && Array.isArray(e[1]) && e[1].length > 0) {
          if (!this.tables[key].searchFiltered.includes(e[0])) {
            this.tables[key].searchFiltered.push(e[0]);
          }
        } else if (e[1] && !Array.isArray(e[1])) {
          if (!this.tables[key].searchFiltered.includes(e[0])) {
            this.tables[key].searchFiltered.push(e[0]);
          }
        }
      });
    }
  }

  deleteSearchFilter(txt: string, key: string) {
    if (txt) {
      Object.entries(this.tables[key].filters).forEach((e: any, i: number) => {
        if (e[0] === txt) {
          this.tables[key].searchFiltered = this.tables[
            key
          ].searchFiltered.filter((f) => f !== txt);
          delete this.tables[key].filters[txt];
          return;
        }
      });
    }
  }

  deleteAllSearchFilter(key: string) {
    Object.entries(this.tables[key]?.filters).forEach((e: any, i: number) => {
      this.tables[key].searchFiltered = [];
    });

    this.tables[key].filters = {};
    this.tables[key].firstToShow = 0;
  }

  resetTable(key: string) {
    if (!key || !this.tables || !this.tables[key]) {
      return;
    }
    this.tables[key].currPage = 0;
    this.tables[key].firstToShow = 0;
    this.tables[key].totalRecords = 0;
    this.tables[key].totalBeforeFilter = 0;
    this.tables[key].filters = {};
    this.tables[key].sortField = undefined;
    this.tables[key].sortOrder = 1;
    this.tables[key].searchFiltered = [];
    this.tables[key].checkedList = [];
  }

  clear() {
    this.tables = {};
  }

  setCheckedList<T>(key: string, list: T[]): T[] {
    list.map((item: any) =>
      this.tables[key].checkedList?.forEach((checked) => {
        item['id'] === checked['id'] && (item['checked'] = true);
      }),
    );
    return list;
  }

  clearCheckedList(key: string) {
    if (this.tables && this.tables[key]) this.tables[key].checkedList = [];
  }

  searchSubject = new Subject<void>();
  disableSub: boolean = false;
  addFilter(key: string) {
    if (!this.disableSub) {
      this.disableSub = true;
      this.searchSubject = new Subject<void>();
      this.searchSubject.pipe(debounceTime(400)).subscribe(() => {
        this.disableSub = false;
        this.searchSubject.complete();
        this.resetFilter(key);
        this.updateSearchFiltered(key);
        this.loadTable.emit(key);
      });
    }

    this.searchSubject.next();
  }

  resetFilter(key: string) {
    this.tables[key].firstToShow = 0;
  }

  filter(key: string, resetFilter: boolean = true) {
    if (resetFilter) {
      this.resetFilter(key);
    }
    this.updateSearchFiltered(key);
    this.loadTable.emit(key);
  }

  deleteFilter(key: string, prop: string) {
    this.resetFilter(key);
    delete this.tables[key].filters[prop];
    this.loadTable.emit(key);
  }

  paginate<T>(
    evt: TableLazyLoadEvent,
    key: string,
    completeList: T[],
    filterFn: (value: T, index: number, array: T[]) => boolean,
    sortFn: (a: T, b: T) => number,
    enableSlice: boolean = true,
  ) {
    evt = this.getData(evt, key);

    const toSort = [...completeList];
    const sorted = toSort?.sort(sortFn);
    const filtered = sorted?.filter(filterFn);

    this.tables[key].value!.next([
      ...(enableSlice
        ? filtered?.slice(evt.first, evt.first! + evt.rows!)
        : filtered),
    ]);
    this.tables[key].totalRecords = completeList?.length ?? 0;
  }
}
