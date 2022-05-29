import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { interval, Observable } from 'rxjs';
import { ILoadable, LOADABLE } from '../../models/loadable.interface';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [{ provide: LOADABLE, useExisting: CounterComponent }],
  standalone: true,
  imports: [CommonModule],
})
export class CounterComponent implements OnInit, ILoadable {
  data = interval(1000);

  constructor(private cd: ChangeDetectorRef, private httpClient: HttpClient) {}

  load(): Observable<number> {
    return this.data;
  }

  ngOnInit(): void {}
}
