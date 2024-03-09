import { Component, OnInit, computed, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterOutlet } from "@angular/router";
import { CustomSidenavComponent } from "../core/layout/custom-sidenav/custom-sidenav.component";
@Component({
  selector: "app-main",
  styleUrls: ["./main.component.scss"],
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    CustomSidenavComponent,
  ],
  template: `
    <mat-toolbar color="primary" class="mat-elevation-z3">
      <button mat-icon-button (click)="collapsed.set(!collapsed())">
        <mat-icon>menu</mat-icon>
      </button>
      <p>NgTaildash</p>
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

  constructor() {}

  ngOnInit() {}
}

// https://www.youtube.com/watch?v=sitHfnoeT88