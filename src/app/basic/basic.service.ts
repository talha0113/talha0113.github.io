import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share, map } from 'rxjs/operators';
import { Basic } from './basic.model';
import { AppConfiguration } from '../app.configuration';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class BasicService {

  constructor(private httpClient: HttpClient, private domSanitizer: DomSanitizer) { }

  private dataResponse$: Observable<Basic> = null;
  public get data(): Observable<Basic> {
    if (this.dataResponse$ === null) {
      this.dataResponse$ = this.httpClient
        .get<Basic>(
          `${AppConfiguration.baseProfileUrl}basic.json`
        )
        .pipe(
          map((value: Basic) => {
            value.image = this.domSanitizer.bypassSecurityTrustUrl(value.image.toString());
            return value;
          }),
          share()
        );
    }
    return this.dataResponse$;
  }
}
