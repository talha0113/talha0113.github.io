import { Component, OnInit } from '@angular/core';
import { Social } from './social.model';
import { Observable } from 'rxjs';
import { SocialService } from './social.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html'
})
export class SocialComponent implements OnInit {
  public data$: Observable<Social[]>;

  constructor(private socialService: SocialService) { }

  public ngOnInit() {
    this.data$ = this.socialService.data;
  }

}
