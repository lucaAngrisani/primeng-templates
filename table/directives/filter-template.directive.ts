import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[filterTemplate]'
})
export class FilterTemplateDirective {

    constructor(public readonly template: TemplateRef<any>) { }

    @Input('filterTemplate') filterTemplate!: string;
}