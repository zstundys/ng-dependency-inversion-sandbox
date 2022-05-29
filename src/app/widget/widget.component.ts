import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  HostBinding,
  OnInit,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { finalize } from 'rxjs';
import { ILoadable, LOADABLE } from '../models/loadable.interface';
import { IconsModule } from '../shared/icons.module';
import { PipesModule } from '../shared/pipes/pipes.module';
import { WidgetTitleComponent } from './widget-title.component';

@UntilDestroy()
@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styles: [
    `
      :host {
        @apply bg-white rounded shadow-lg flex flex-col relative h-96 overflow-hidden;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, WidgetTitleComponent, IconsModule, PipesModule],
})
export class WidgetComponent implements OnInit, AfterViewInit {
  @HostBinding('[attr.role]') role = 'article';
  @ContentChild(LOADABLE, { static: true }) content?: ILoadable;

  loading = false;
  updatedAt?: Date = undefined;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {
    if (this.content) {
      this.loading = true;
    }
  }

  ngAfterViewInit(): void {
    this.loadContent();
  }

  onRefreshClick() {
    this.loadContent(true);
  }

  private loadContent(update: boolean = false) {
    if (!this.content) {
      return;
    }

    this.loading = true;

    this.content
      .load()
      .pipe(
        finalize(() => {
          this.loading = false;
          this.cd.markForCheck();
        }),
        untilDestroyed(this)
      )
      .subscribe({
        next: () => {
          if (update) {
            this.updatedAt = new Date();
          }
        },
      });
  }
}
