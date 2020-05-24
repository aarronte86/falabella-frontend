import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { RentRoutingModule } from "./rent-routing.module";
import { RentComponent } from "./rent.component";
import { RentFormComponent } from "./rent-form/rent-form.component";

@NgModule({
  declarations: [RentComponent, RentFormComponent],
  imports: [SharedModule, RentRoutingModule],
})
export class RentModule {}
