import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-detail',
  template: `<p>detail page</p><button (click)="back()">返回</button>`,
})
export class DetailComponent {
  name = 'Angular ' + VERSION.major;
  page: string;

  back(): void {
    history.back();
  }
}
