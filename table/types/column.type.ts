import { TemplateRef } from "@angular/core";

export type ColumnType = {
    //HEADER

    /** LABEL COLUMN'S HEADER */
    label: string;
    
    /** CUSTOM TEMPLATE COUMN'S HEADER */
    headerTemplate?: TemplateRef<any>;

    /** COLUMN'S PROPERTY NAME */
    propName: string;

    /** TO USE ONLY IF filterField != propName */
    filterField?: string;
    /** TEXT TO SHOW IN COLUMN FILTER */
    filterText?: string;
    /** CUSTOM TEMPLATE FOR FILTER */
    filterTemplate?: TemplateRef<any>;
    /** CHECK IF COLUMN IS FILTRABLE (DEFAULT IS FALSE) */
    filtrable?: boolean;

    /** TO USE ONLY IF sortField != propName */
    sortField?: string;
    /** CHECK IF COLUMN IS SORTABLE (DEFAULT IS FALSE) */
    sortable?: boolean;
    /** MAX LENGTH BEFORE TRUNCATE (FOR APP-TEXT-TABLE) */
    maxLength?: number;

    //BODY

    /** CUSTOM TEMPLATE FOR SINGLE ROW */
    bodyTemplate?: TemplateRef<any>;
    treeRowTemplate?: TemplateRef<any>;

    /** CSS CLASS OF TD */
    className?: string;
}