import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  standalone: true,
  selector: 'app-text-table',
  templateUrl: './text-table.component.html',
  styleUrls: ['./text-table.component.css'],
  imports: [
    TooltipModule,
  ]
})
export class TextTableComponent implements OnInit {

  @Input() maxLength: number = 100;
  @Input() text!: string;
  @Input() routerLink!: string;
  @Input() customClass!: string;
  @Input() disableTooltip!: boolean;
  @Input() tooltipValue!: string;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.routerLink &&
      this.router.navigate([this.routerLink]);
  }

}
