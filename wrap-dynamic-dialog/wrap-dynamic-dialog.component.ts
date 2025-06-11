import {
  ViewContainerRef,
  AfterViewInit,
  Component,
  ViewChild,
} from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { WrapDialogService } from 'services';

@Component({
  templateUrl: './wrap-dynamic-dialog.component.html',
  selector: 'wrap-dynamic-dialog',
  imports: [DialogModule],
})
export class WrapDynamicDialogComponent implements AfterViewInit {
  @ViewChild('dynamicContainer', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  constructor(public wrapDialogService: WrapDialogService) {}

  ngAfterViewInit(): void {
    this.wrapDialogService.container = this.container;
  }
}
