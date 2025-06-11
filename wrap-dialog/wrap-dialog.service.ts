import {
  ViewContainerRef,
  WritableSignal,
  Injectable,
  signal,
  Type,
} from '@angular/core';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { Subject } from 'rxjs';

@Injectable()
export class WrapDialogService {
  header: WritableSignal<undefined | string> = signal(undefined);
  visible: WritableSignal<boolean> = signal(false);
  closable: WritableSignal<boolean> = signal(true);

  data: WritableSignal<any> = signal({});
  container!: ViewContainerRef;

  onClose!: Subject<any>;

  open<T>(component: Type<T>, opt: DynamicDialogConfig): WrapDialogService {
    this.onClose = new Subject<any>();
    this.data.set(opt.data);
    this.header.set(opt.header);
    this.closable.set(opt.closable != false);
    if (this.container) {
      this.container.clear();
      this.container.createComponent(component);
    } else {
      this.waitForContainer(() => this.container.createComponent(component));
    }
    this.visible.set(true);
    return this;
  }

  waitForContainer(callback: () => void): void {
    const interval = setInterval(() => {
      if (this.container) {
        callback();
        if (interval) {
          clearInterval(interval);
        }
      }
    }, 100);
  }

  close(obj?: any): void {
    this.visible.set(false);
    this.container.clear();
    this.onClose.next(obj);
    this.onClose.complete();
  }
}
