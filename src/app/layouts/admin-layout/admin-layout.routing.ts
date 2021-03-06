import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {ProductComponent} from "../../pages/product/container/product/product.component";
import { AsignaturasComponent } from '../../pages/asignaturas/container/asignaturas/asignaturas.component';
import { MateriasComponent } from '../../pages/materias/container/materias/materias.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'products',       component: ProductComponent },
    { path: 'asignaturaperu',    component: AsignaturasComponent },
    { path: 'materiaperu',    component: MateriasComponent }
];
