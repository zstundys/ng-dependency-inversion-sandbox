import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export interface ILoadable {
  load(): Observable<any>;
}

export const LOADABLE = new InjectionToken<ILoadable>('LOADABLE');
