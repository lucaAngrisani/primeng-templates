import { FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

export interface TableModel<T = any> {
    description: string | undefined;
    currPage: number;
    firstToShow: number;
    rowsNum: number;
    filterForm?: FormGroup;
    totalRecords: number;
    rowsOptions: number[];
    loading: boolean;
    sortField: string | undefined;
    sortOrder: number;
    totalBeforeFilter: number;
    filters: { [key: string]: any };
    dt?: any;
    searchFiltered: string[];
    checkedList?: T[];
    value?: BehaviorSubject<T[]>;
}