import { Component, model } from '@angular/core';
import { MessageModule } from 'primeng/message';

import { WrapMessageOptions } from './wrap-message-options.model';

@Component({
  templateUrl: './wrap-message.component.html',
  selector: 'wrap-message',
  imports: [MessageModule],
})
export class WrapMessageComponent {
  message = model<WrapMessageOptions>();
}
