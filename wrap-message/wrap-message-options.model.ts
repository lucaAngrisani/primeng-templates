import { ToastMessageOptions } from 'primeng/api';

export interface WrapMessageOptions extends ToastMessageOptions {
  action?: () => void;
}
