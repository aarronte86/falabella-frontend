import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { LandingRoutingModule } from "./landing-routing.module";
import { LandingComponent } from "./landing.component";
import { ApplicationFormComponent } from './application-form/application-form.component';

@NgModule({
  declarations: [LandingComponent, ApplicationFormComponent],
  imports: [SharedModule, LandingRoutingModule],
})
export class LandingModule {}
