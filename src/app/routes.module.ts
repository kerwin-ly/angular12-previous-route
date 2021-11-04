import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteRoutingModule } from './routes-routing.module';
@NgModule({
  imports: [RouteRoutingModule],
  exports: [RouterModule],
  providers: [],
})
export class RoutesModule {}
