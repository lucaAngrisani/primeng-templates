import { WritableSignal, Injectable, signal } from '@angular/core';

@Injectable()
export class WrapDrawerService {
    visibleMenu: WritableSignal<boolean> = signal(false);
}
