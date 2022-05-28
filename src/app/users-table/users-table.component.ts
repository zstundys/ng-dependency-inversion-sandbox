import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { ILoadable, LOADABLE } from '../loadable.interface';
import { IUser } from '../models/user.interface';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: LOADABLE, useExisting: UsersTableComponent }],
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
