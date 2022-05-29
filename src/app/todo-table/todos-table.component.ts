import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  TrackByFunction,
} from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { ILoadable, LOADABLE } from '../models/loadable.interface';
import { ITodo } from '../models/todo.interface';

@Component({
  selector: 'app-todos-table',
  templateUrl: './todos-table.component.html',
  styles: [
    `
      :host {
        @apply block -my-3 -mx-5;

        --columns: 3;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: LOADABLE, useExisting: TodosTableComponent }],
  standalone: true,
  imports: [CommonModule],
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
