import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { ButtonComponent } from "./components/button/button.component";

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonComponent],
})
export class SharedModule {}
