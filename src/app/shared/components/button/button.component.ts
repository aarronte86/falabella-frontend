import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnInit {
  @Input()
  label: string;

  @Input()
  disabled = false;

  @Output()
  clicked = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClick(): void {
    this.clicked.next(1);
  }
}
