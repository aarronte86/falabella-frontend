import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HeaderComponent } from "./layout/header/header.component";
import { ApplicationService } from "./services/application.service";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule],
  providers: [ApplicationService],
  exports: [HeaderComponent],
})
export class CoreModule {}
