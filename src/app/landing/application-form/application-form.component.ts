import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

import { ApplicationService } from "src/app/core/services/application.service";

@Component({
  selector: "app-application-form",
  templateUrl: "./application-form.component.html",
  styleUrls: ["./application-form.component.scss"],
})
export class ApplicationFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private service: ApplicationService,
    private fromBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.setApplicationForm();
  }

  private setApplicationForm(): void {
    this.form = this.fromBuilder.group({
      rut: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
    });
  }

  private goToRent(): void {
    this.router.navigate(["rent"]);
  }

  private fillApplicationData(): void {
    const { rut, phone, email } = this.form.getRawValue();

    this.service.setRut(rut);
    this.service.setPhone(phone);
    this.service.setEmail(email);
  }

  onContinue(): void {
    this.fillApplicationData();
    this.goToRent();
  }
}
