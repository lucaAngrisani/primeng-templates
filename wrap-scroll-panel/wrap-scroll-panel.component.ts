import { ScrollPanel } from 'primeng/scrollpanel';
import { Component, input } from '@angular/core';

@Component({
    templateUrl: './wrap-scroll-panel.component.html',
    styleUrl: './wrap-scroll-panel.component.css',
    selector: 'wrap-scroll-panel',
    imports: [ScrollPanel],
  })
export class WrapScrollPanelComponent {
  height = input<string>('400px');
}
