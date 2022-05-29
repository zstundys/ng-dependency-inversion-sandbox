import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { delay, Observable, tap } from 'rxjs';
import { IComment } from '../../models/comment.interface';
import { ILoadable, LOADABLE } from '../../models/loadable.interface';

@Component({
  selector: 'app-comments-raw-output',
  templateUrl: './comments-raw-output.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: LOADABLE, useExisting: CommentsRawOutputComponent }],
  standalone: true,
  imports: [CommonModule],
})
export class CommentsRawOutputComponent implements OnInit, ILoadable {
  data: IComment[] = [];

  private postId = 1;

  constructor(private cd: ChangeDetectorRef, private httpClient: HttpClient) {}

  load(): Observable<IComment[]> {
    return this.httpClient
      .get<IComment[]>(
        `https://jsonplaceholder.typicode.com/posts/${
          this.postId++ % 4
        }/comments`
      )
      .pipe(
        delay(500),
        tap((response) => {
          this.data = response.map((r) => ({
            ...r,
            name: r.name.split(' ').slice(0, 2).join(' '),
          }));
          this.cd.markForCheck();
        })
      );
  }

  ngOnInit(): void {}
}
