import { TranslateService } from "@ngx-translate/core";
import { ConfirmationService } from "primeng/api";
import { Injectable } from "@angular/core";

@Injectable()
export class WrapConfirmService {
    constructor(
        private translate: TranslateService,
        private confirmationService: ConfirmationService,
    ) { }

    confirm(options?: {
        customAcceptOutlined?: boolean,
        customRejectOutlined?: boolean,
        customAcceptSeverity?: string,
        customRejectSeverity?: string,
        customAcceptLabel?: string,
        customRejectLabel?: string,
        customMessage?: string,
        customHeader?: string,
        onAccept?: Function,
        onReject?: Function,
    }) {
        this.confirmationService.confirm({
            rejectButtonProps: {
                label: options?.customRejectLabel ?? this.translate.instant('confirm.default.reject-btn-label'),
                severity: options?.customRejectSeverity ?? 'secondary',
                outlined: options?.customRejectSeverity,
            },
            acceptButtonProps: {
                label: options?.customRejectLabel ?? this.translate.instant('confirm.default.accept-btn-label'),
                severity: options?.customRejectSeverity ?? 'primary',
                outlined: options?.customRejectSeverity,
            },
            message: options?.customMessage ?? this.translate.instant('confirm.default.message'),
            header: options?.customHeader ?? this.translate.instant('confirm.default.header'),
            accept: () => options?.onAccept?.(),
            reject: () => options?.onReject?.(),
            icon: 'pi pi-exclamation-triangle',
            closeOnEscape: true,
            closable: true,
        });
    }
}