import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { ILoadable, LOADABLE } from '../../models/loadable.interface';
import { IUser } from '../../models/user.interface';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styles: [
    `
      :host {
        @apply block -my-3 -mx-5;

        --columns: 5;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: LOADABLE, useExisting: UsersTableComponent }],
  standalone: true,
  imports: [CommonModule],
})
export class UsersTableComponent implements OnInit, ILoadable {
  data: IUser[] = [];

  constructor(private cd: ChangeDetectorRef, private httpClient: HttpClient) {}

  load(): Observable<any> {
    return this.httpClient
      .get<IUser[]>('https://jsonplaceholder.typicode.com/users')
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
