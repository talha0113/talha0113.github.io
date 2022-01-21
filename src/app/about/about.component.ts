import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Basic } from '../basic/basic.model';
import { BasicService } from '../basic/basic.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit {

  public data$: Observable<Basic>;

  constructor(private basicService: BasicService) { }

  public ngOnInit() {
    this.data$ = this.basicService.data;
  }

}
