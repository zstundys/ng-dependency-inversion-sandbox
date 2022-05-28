import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  TrackByFunction,
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

  completedAtTop = false;

  byId: TrackByFunction<ITodo> = (index, item) => item.id;

  constructor(private cd: ChangeDetectorRef, private httpClient: HttpClient) {}

  load(): Observable<any> {
    return this.httpClient
      .get<ITodo[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        delay(500),
        tap((response) => {
          const trueDirection = this.completedAtTop ? -1 : 1;
          const falseDirection = this.completedAtTop ? 1 : -1;
          this.data = response.sort((a, b) =>
            a.completed ? trueDirection : falseDirection
          );
          this.completedAtTop = !this.completedAtTop;
          this.cd.markForCheck();
        })
      );
  }

  ngOnInit(): void {}
}
