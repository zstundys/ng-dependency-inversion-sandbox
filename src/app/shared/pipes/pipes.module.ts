import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatDistanceToNowPipe } from './format-distance-to-now.pipe';



@NgModule({
  declarations: [
    FormatDistanceToNowPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatDistanceToNowPipe
  ]
})
export class PipesModule { }
