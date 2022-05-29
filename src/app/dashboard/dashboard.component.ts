import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { WidgetTitleComponent } from '../widget/widget-title.component';
import { WidgetComponent } from '../widget/widget.component';
import { CommentsRawOutputComponent } from './comments-raw-output/comments-raw-output.component';
import { CounterComponent } from './counter/counter.component';
import { TodosTableComponent } from './todo-table/todos-table.component';
import { UsersTableComponent } from './users-table/users-table.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    WidgetTitleComponent,
    WidgetComponent,
    TodosTableComponent,
    UsersTableComponent,
    CommentsRawOutputComponent,
    CounterComponent,
  ],
  templateUrl: './dashboard.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
