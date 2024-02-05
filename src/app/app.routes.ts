import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/NotFound/NotFound.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', loadChildren: () =>
            import('./main/main.module').then(m => m.MainModule)
    },
    {
        path: '**', component: NotFoundComponent
    }
];
