import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IconsModule } from '../shared/icons.module';
import { WidgetComponent } from './widget.component';
import { WidgetTitleComponent } from './widget-title/widget-title.component';
import { PipesModule } from '../shared/pipes/pipes.module';

@NgModule({
  declarations: [WidgetComponent, WidgetTitleComponent],
  imports: [CommonModule, IconsModule, PipesModule],
  exports: [WidgetComponent, WidgetTitleComponent],
})
export class WidgetModule {}
