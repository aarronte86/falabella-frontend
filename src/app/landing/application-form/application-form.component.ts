import { Component, OnInit } from "@angular/core";
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-application-form",
  templateUrl: "./application-form.component.html",
  styleUrls: ["./application-form.component.scss"],
})
export class ApplicationFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fromBuilder: FormBuilder, private router: Router) {}

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

  onContinue(): void {
    this.goToRent();
  }
}
