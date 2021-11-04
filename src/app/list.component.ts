import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { RoutingStateService } from './route-state.service';
import { getQueryString } from './utils';

@Component({
  selector: 'app-list',
  template: `
    <div>
      <p>page is {{page}}</p>
      <button (click)="toDetail()">to detail</button>
    </div>
  `,
})
export class ListComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  page = 0;
  preRoute: string;

  constructor(
    private routeService: RoutingStateService,
    private router: Router
  ) {
    this.routeService.previousRoute$$
      .pipe(takeUntil(this.destroy$))
      .subscribe((route) => {
        if (!route || !route.url.includes('?')) return;
        const page = getQueryString(route.url, 'page');
        this.page = (page ?? '') === '' ? 0 : Number(page);
      });
  }

  toDetail(): void {
    this.router.navigateByUrl('/detail?page=2&page_size=10');
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
