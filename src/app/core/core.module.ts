import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { HeaderComponent } from "./layout/header/header.component";
import { HeaderInterceptor } from "./http-interceptors/header-interceptor";
import { ApplicationService } from "./services/application.service";

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    ApplicationService,
  ],
  exports: [HeaderComponent],
})
export class CoreModule {}
