import { FileUploadModule, FileSelectEvent } from 'primeng/fileupload';
import { Component, output, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'wrap-file-upload',
  styleUrl: './wrap-file-upload.component.css',
  templateUrl: './wrap-file-upload.component.html',
  imports: [FormsModule, FileUploadModule, TranslateModule],
})
export class WrapFileUploadComponent {
  accept = input<string>('image/*,application/pdf');
  chooseLabel = input<string>('primeng.choose');
  maxFileSize = input<number>(1048576); //1 MB
  onSelect = output<FileSelectEvent>();

  auto = input<boolean>(true);
}
