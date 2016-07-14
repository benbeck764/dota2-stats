import { provideRouter, RouterConfig }  from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { ChartsComponent } from './charts/charts.component';
import { OverviewComponent } from './overview/overview.component';

const routes: RouterConfig = [
    {
        path: '',
        component: OverviewComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'charts',
        component: ChartsComponent
    }
];

export const appRouterProviders = [
    provideRouter(routes)
];