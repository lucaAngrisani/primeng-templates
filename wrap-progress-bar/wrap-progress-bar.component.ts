import { Component, model } from '@angular/core';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  templateUrl: './wrap-progress-bar.component.html',
  selector: 'wrap-progress-bar',
  imports: [ProgressBarModule],
})
export class WrapProgressBarComponent {}
