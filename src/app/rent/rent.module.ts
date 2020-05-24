import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { RentRoutingModule } from "./rent-routing.module";
import { RentComponent } from "./rent.component";

@NgModule({
  declarations: [RentComponent],
  imports: [SharedModule, RentRoutingModule],
})
export class RentModule {}
