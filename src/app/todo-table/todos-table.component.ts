import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { ILoadable, LOADABLE } from '../loadable.interface';
import { ITodo } from '../models/todo.interface';

@Component({
  selector: 'app-todos-table',
  templateUrl: './todos-table.component.html',
  styleUrls: ['./todos-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: LOADABLE, useExisting: TodosTableComponent }],
})
export class TodosTableComponent implements OnInit, ILoadable {
  data: ITodo[] = [];

  constructor(private cd: ChangeDetectorRef, private httpClient: HttpClient) {}

  load(): Observable<any> {
    return this.httpClient
      .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        delay(500),
        tap((response) => {
          this.data = response;
          this.cd.markForCheck();
        })
      );
  }

  ngOnInit(): void {}
}
