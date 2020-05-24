import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonComponent } from "./components/button/button.component";

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule],
  exports: [CommonModule, ButtonComponent],
})
export class SharedModule {}
