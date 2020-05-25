import { Component } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";

import { Subscription } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  private _subscription: Subscription;

  constructor(private router: Router) {
    // Redirect to landing when browser get refreshed and it is not in landing page
    this._subscription = router.events.subscribe((event) => {
      if (
        event instanceof NavigationStart &&
        !router.navigated &&
        event.url !== "/"
      ) {
        router.navigate(["/"]);
      }
    });
  }
}
