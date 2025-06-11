import {
  ContentChild,
  TemplateRef,
  Component,
  input,
  model,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { DrawerModule } from 'primeng/drawer';

@Component({
  templateUrl: './wrap-drawer.component.html',
  imports: [DrawerModule, NgTemplateOutlet],
  selector: 'wrap-drawer',
})
export class WrapDrawerComponent {
  @ContentChild('headerTemplate', { read: TemplateRef })
  headerTemplate!: TemplateRef<any>;
  visible = model<boolean>(false);
  styleClass = input<string>('');

  header = input<string>('');
}
