import { FileUploadModule, FileSelectEvent } from 'primeng/fileupload';
import { Component, output, input } from '@angular/core';
import { MAX_SIZE_STORAGE } from 'constants-lib';
import { FormsModule } from '@angular/forms';

@Component({
  templateUrl: './wrap-file-upload.component.html',
  imports: [FormsModule, FileUploadModule],
  selector: 'wrap-file-upload',
})
export class WrapFileUploadComponent {
  accept = input<string>('image/*,application/pdf');
  maxFileSize = input<number>(MAX_SIZE_STORAGE);
  onSelect = output<FileSelectEvent>();

  auto = input<boolean>(true);
}
