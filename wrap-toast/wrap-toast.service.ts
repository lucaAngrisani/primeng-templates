import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MessageService, ToastMessageOptions } from "primeng/api";

@Injectable()
export class WrapToastService {
    constructor(
        private msg: MessageService,
        private translate: TranslateService,
    ) { }

    add(options: ToastMessageOptions) {
        this.msg.add({
            ...options
        });
    }

    async toastable(options: { actionTry: Function, actionCatch?: Function }) {
        try {
            await options.actionTry();
            this.add({
                severity: 'success',
                summary: this.translate.instant('toast.default.success-summary'),
                detail: this.translate.instant('toast.default.success-detail'),
            });
        } catch (error: any) {
            options.actionCatch?.();
            this.add({
                severity: 'error',
                summary: this.translate.instant('toast.default.error-summary'),
                detail: error?.['message'] ?? this.translate.instant('toast.default.error-detail'),
            });
        }
    }
}