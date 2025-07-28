import { Directive, Input, TemplateRef } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[treeRowTemplate]'
})
export class TreeRowTemplateDirective {

    constructor(public readonly template: TemplateRef<any>) { }

    @Input('treeRowTemplate') treeRowTemplate!: string;
}