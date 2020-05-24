import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-rent-form",
  templateUrl: "./rent-form.component.html",
  styleUrls: ["./rent-form.component.scss"],
})
export class RentFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fromBuilder: FormBuilder) {}

  ngOnInit() {
    this.setRentForm();
  }

  private setRentForm(): void {
    this.form = this.fromBuilder.group({
      rent: ["", Validators.required],
    });
  }

  onContinue(): void {
    return;
  }
}
