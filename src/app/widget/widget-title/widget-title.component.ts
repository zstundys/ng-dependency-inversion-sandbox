import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-widget-title',
  templateUrl: './widget-title.component.html',
  styleUrls: ['./widget-title.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetTitleComponent implements OnInit {
  @HostBinding('[attr.role]') role = 'heading';
  @HostBinding('[attr.aria-level]') ariaLevel = '4';

  constructor() {}

  ngOnInit(): void {}
}
