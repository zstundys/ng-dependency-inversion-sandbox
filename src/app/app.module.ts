import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosTableComponent } from './todo-table/todos-table.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { WidgetModule } from './widget/widget.module';

@NgModule({
  declarations: [AppComponent, TodosTableComponent, UsersTableComponent],
  imports: [BrowserModule, HttpClientModule, WidgetModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
