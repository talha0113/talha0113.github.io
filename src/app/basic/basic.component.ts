import { Component, OnInit } from '@angular/core';
import { BasicService } from './basic.service';
import { Observable } from 'rxjs';
import { Basic } from './basic.model';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html'
})
export class BasicComponent implements OnInit {

  public data$: Observable<Basic>;

  constructor(private basicService: BasicService) { }

  public ngOnInit() {
    this.data$ = this.basicService.data;
  }

}
