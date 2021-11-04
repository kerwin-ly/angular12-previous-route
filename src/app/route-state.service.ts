import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { distinctUntilChanged, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RoutingStateService {
  private previousRoute$: BehaviorSubject<NavigationEnd> =
    new BehaviorSubject<NavigationEnd>(null);
  public previousRoute$$: Observable<NavigationEnd> = this.previousRoute$.pipe(
    filter((data) => !!data),
    distinctUntilChanged()
  );
  private previousRoute: NavigationEnd = null;
  private currentRoute: NavigationEnd = null;

  constructor(private router: Router) {}

  public loadRouting(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route: NavigationEnd) => {
        this.previousRoute = this.currentRoute;
        this.currentRoute = route;
        this.setPreviousRoute(this.previousRoute);
      });
  }

  public setPreviousRoute(previousRoute: NavigationEnd) {
    this.previousRoute$.next(previousRoute);
  }
}
