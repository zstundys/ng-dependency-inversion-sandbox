import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodosTableComponent } from './todo-table/todos-table.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { WidgetTitleComponent } from './widget/widget-title.component';
import { WidgetComponent } from './widget/widget.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterModule,
    WidgetTitleComponent,
    WidgetComponent,
    TodosTableComponent,
    UsersTableComponent,
    HttpClientModule,
  ],
})
export class AppComponent {}
