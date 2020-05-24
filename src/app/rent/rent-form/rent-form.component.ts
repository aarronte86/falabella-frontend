import { Component, OnInit } from "@angular/core";
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
  form: FormGroup;

  constructor(
    private service: ApplicationService,
    private fromBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.setRentForm();
  }

  private setRentForm(): void {
    this.form = this.fromBuilder.group({
      rent: ["", Validators.required],
    });
  }

  onContinue(): void {
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
      .subscribe();
  }
}
