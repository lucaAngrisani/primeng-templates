import { ContentChild, TemplateRef, Component, input } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
import { Carousel } from 'primeng/carousel';

@Component({
  templateUrl: './wrap-carousel.component.html',
  imports: [Carousel, NgTemplateOutlet],
  selector: 'wrap-carousel',
})
export class WrapCarouselComponent<T> {
  @ContentChild('previousIconTemplate', { read: TemplateRef })
  previousIconTemplate!: TemplateRef<any>;

  @ContentChild('nextIconTemplate', { read: TemplateRef })
  nextIconTemplate!: TemplateRef<any>;
  @ContentChild('headerTemplate', { read: TemplateRef })
  headerTemplate!: TemplateRef<any>;
  @ContentChild('footerTemplate', { read: TemplateRef })
  footerTemplate!: TemplateRef<any>;
  @ContentChild('itemTemplate', { read: TemplateRef })
  itemTemplate!: TemplateRef<any>;
  value = input<T[]>([]);
}
