import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceComponent } from './pages/service/service.component';

const routes: Routes = [
  { path: 'services', component: ServiceListComponent },
  { path: 'add-service', component: ServiceComponent },
  { path: 'service/:id', component: ServiceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesRoutingModule {}
