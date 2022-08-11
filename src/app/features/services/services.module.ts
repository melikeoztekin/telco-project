import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServiceListComponent } from './components/service-list/service-list.component';
import { ServiceComponent } from './pages/service/service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainLayoutComponent } from 'src/app/shared/layouts/main-layout/main-layout.component';
@NgModule({
  declarations: [ServiceListComponent, ServiceComponent],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [ServiceListComponent],
})
export class ServicesModule {}
