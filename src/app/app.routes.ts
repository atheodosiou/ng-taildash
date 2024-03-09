import { Routes } from "@angular/router";
import { NotFoundComponent } from "./pages/NotFound/NotFound.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "app",
  },
  {
    path: "app",
    loadComponent: () =>
      import("./main/main.component").then((c) => c.MainComponent),
    children: [
      {
        path: "",
        redirectTo: "overview",
        pathMatch:'full'
      },
      {
        path: "overview",
        loadComponent: () =>
          import("./pages/overview/overview.component").then(
            (c) => c.OverviewComponent
          ),
      },
      {
        path: "invitations",
        loadComponent: () =>
          import("./pages/invitations/invitations.component").then(
            (c) => c.InvitationsComponent
          ),
      },
      {
        path: "menu",
        loadComponent: () =>
          import("./pages/menu/menu.component").then((c) => c.MenuComponent),
      },
      {
        path: "tables",
        loadComponent: () =>
          import("./pages/table-plan/table-plan.component").then(
            (c) => c.TablePlanComponent
          ),
      },
    ],
  },
  {
    path: "**",
    component: NotFoundComponent,
  },
];
