import { Component, Input, computed, signal } from "@angular/core";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { NgClass } from "@angular/common";
import { RouterLink, RouterLinkActive } from "@angular/router";
export type MenuItem = {
  icon: string;
  label: string;
  routerLink: string[];
};

@Component({
  selector: "app-custom-sidenav",
  standalone: true,
  imports: [
    MatListModule,
    MatIconModule,
    NgClass,
    RouterLink,
    RouterLinkActive,
  ],
  template: `
    <div class="flex flex-1 h-full flex-col">
      <div
        class="sidenav-header flex flex-col gap-2 items-center justify-center"
      >
        <img
          [width]="profilePicSize()"
          [height]="profilePicSize()"
          src="assets/svg/logo.svg"
          alt="wedding plan logo"
        />
        <div class="header-text" [class.hide-header-text]="sideNavCollapsed()">
          <h2>Wedding Plan</h2>
        </div>
      </div>
      <mat-nav-list class="w-full">
        @for (menuItem of menuItems(); track menuItem.routerLink) {
        <a
          mat-list-item
          class="w-full menu-item"
          [routerLink]="menuItem.routerLink"
          routerLinkActive="selected-menu-item"
          #rla="routerLinkActive"
          [activated]="rla.isActive"
        >
          <mat-icon
            [fontSet]="
              rla.isActive ? 'material-icons' : 'material-icons-outlined'
            "
            matListItemIcon
            >{{ menuItem.icon }}</mat-icon
          >
          @if(!sideNavCollapsed()){
          <span>{{ menuItem.label }}</span>
          }
        </a>
        }
      </mat-nav-list>
    </div>
  `,
  styles: [
    `
      :host * {
        transition: all 100ms ease-in-out;
      }
      .sidenav-header {
        padding-top: 24px;

        > img {
          // border-radius:100%;
          object-fit: cover;
        }

        .header-text {
          > h2 {
            margin: 0;
            font-size: 1.1rem;
            font-weight: 500;
            line-height: 1.5rem;
          }
        }

        .hide-header-text {
          opacity: 0;
          height: 0 !important;
        }
      }

      .menu-item {
        border-left: 5px solid;
        border-left-color: transparent;
      }

      .selected-menu-item {
        border-left-color: var(--primary-color);
        background: rgba(0, 0, 0, 0.05);
      }
    `,
  ],
})
export class CustomSidenavComponent {
  sideNavCollapsed = signal(false);
  profilePicSize = computed(() => (this.sideNavCollapsed() ? "32" : "100"));
  @Input() set collapsed(value: boolean) {
    this.sideNavCollapsed.set(value);
  }

  menuItems = signal<MenuItem[]>([
    { icon: "dashboard", label: "Overview", routerLink: ["overview"] },
    {
      icon: "mail",
      label: "Invitations",
      routerLink: ["invitations"],
    },
    { icon: "restaurant_menu", label: "Menu", routerLink: ["menu"] },
    { icon: "table_restaurant", label: "Tables", routerLink: ["tables"] },
  ]);
}
