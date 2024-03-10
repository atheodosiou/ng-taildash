import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent implements OnInit {
  private readonly translateService = inject(TranslateService);

  ngOnInit(): void {
    this.translateService.setDefaultLang("en");
    this.translateService.use(localStorage.getItem("lang") || "en");
  }
}
