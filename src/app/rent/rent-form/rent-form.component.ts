import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

import { empty } from "rxjs";
import { catchError } from "rxjs/operators";

import { ApplicationService } from "src/app/core/services/application.service";

@Component({
  selector: "app-rent-form",
  templateUrl: "./rent-form.component.html",
  styleUrls: ["./rent-form.component.scss"],
})
export class RentFormComponent implements OnInit {
  private _isProcessing = false;

  form: FormGroup;

  constructor(
    private service: ApplicationService,
    private fromBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.setRentForm();
  }

  get isProcessing(): boolean {
    return this._isProcessing;
  }

  get sendButtonLabel(): string {
    return this.isProcessing ? "Enviando..." : "Continuar";
  }

  private setRentForm(): void {
    this.form = this.fromBuilder.group({
      rent: ["", Validators.required],
    });
  }

  private goToLanding(): void {
    this.router.navigate(["/"]);
  }

  onContinue(): void {
    this._isProcessing = true;

    const { rent } = this.form.getRawValue();

    this.service
      .sendApplication(rent)
      .pipe(
        catchError(() => {
          alert(
            "Ups! No estamos disponible en estos momentos. Intente nuevamente en unos minutos."
          );

          return empty();
        })
      )
      .subscribe(
        () => {
          alert(
            "En hora buena! Su solicitud ha sido recibida de forma existosa."
          );

          this.goToLanding();
        },
        () => {},
        () => (this._isProcessing = false)
      );
  }
}
