import {
  Component,
  OnInit,
  computed,
  effect,
  inject,
  signal,
} from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterOutlet } from "@angular/router";
import { CustomSidenavComponent } from "../core/layout/custom-sidenav/custom-sidenav.component";
import { MatMenuModule } from "@angular/material/menu";
import {
  TranslateService,
  TranslatePipe,
  TranslateModule,
} from "@ngx-translate/core";
@Component({
  selector: "app-main",
  styleUrls: ["./main.component.scss"],
  standalone: true,
  providers: [TranslatePipe],
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    CustomSidenavComponent,
    MatMenuModule,
    TranslateModule,
  ],
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z3">
      <button mat-icon-button (click)="collapsed.set(!collapsed())">
        <mat-icon>menu</mat-icon>
      </button>
      <p>Wedding Plan</p>
      <div class="flex-grow"></div>
      <button mat-button [matMenuTriggerFor]="menu">
        <mat-icon>arrow_drop_down</mat-icon>
        <span>{{
          selectedLanguage() === "en"
            ? ("toolbar.lang-en" | translate)
            : ("toolbar.lang-gr" | translate)
        }}</span>
      </button>
      <mat-menu #menu="matMenu">
        <button mat-menu-item (click)="changeLang('en')">
          {{ "toolbar.lang-en" | translate }}
        </button>
        <button mat-menu-item (click)="changeLang('gr')">
          {{ "toolbar.lang-gr" | translate }}
        </button>
      </mat-menu>
    </mat-toolbar>
    <mat-sidenav-container>
      <mat-sidenav opened mode="side" [style.width]="sidenavWidth()">
        <app-custom-sidenav [collapsed]="collapsed()"></app-custom-sidenav>
      </mat-sidenav>
      <mat-sidenav-content class="content" [style.margin-left]="sidenavWidth()">
        <router-outlet></router-outlet>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class MainComponent implements OnInit {
  collapsed = signal<boolean>(false);
  sidenavWidth = computed(() => (this.collapsed() ? "70px" : "200px"));
  selectedLanguage = signal<string>(localStorage.getItem("lang") || "en");
  private readonly translationService = inject(TranslateService);
  constructor() {}

  ngOnInit() {
    this.translationService.use(this.selectedLanguage());
  }

  changeLang(lang: string) {
    this.selectedLanguage.set(lang);
    localStorage.setItem("lang", lang);
    this.translationService.use(lang);
  }
}

// https://www.youtube.com/watch?v=sitHfnoeT88
