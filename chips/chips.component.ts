import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
  imports: [
    ChipModule,
    TranslateModule,
  ]
})
export class ChipsComponent implements OnInit {

  @Input() chips: string[] = [];
  @Input() translateKey : string = '';

  @Output() deletedChip = new EventEmitter<string>();
  @Output() deletedAllChips = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
  }

  deleteChip(chip: string) {
    this.deletedChip.emit(chip);
    
  }
  deleteAllChips(){
    this.deletedAllChips.emit();
  }
}
