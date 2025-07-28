import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[headerTemplate]'
})
export class HeaderTemplateDirective {

    constructor(public readonly template: TemplateRef<any>) { }

    @Input('headerTemplate') headerTemplate!: string;
}