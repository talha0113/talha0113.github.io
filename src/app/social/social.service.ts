import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Social } from './social.model';
import { share } from 'rxjs/operators';
import { AppConfiguration } from '../app.configuration';

@Injectable({
  providedIn: 'root'
})
export class SocialService {

  constructor(private httpClient: HttpClient) { }

  private dataResponse$: Observable<Social[]> = null;
  public get data(): Observable<Social[]> {
    if (this.dataResponse$ === null) {
      this.dataResponse$ = this.httpClient
        .get<Social[]>(
          `${AppConfiguration.baseProfileUrl}social.json`
        )
        .pipe(
          share()
        );
    }
    return this.dataResponse$;
  }
}
