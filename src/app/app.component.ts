import { Component, OnInit, VERSION } from '@angular/core';
import { RoutingStateService } from './route-state.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  constructor(private routingStateService: RoutingStateService) {}

  ngOnInit() {
    this.routingStateService.loadRouting();
  }
}
