import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomepageComponent } from './common/pages/homepage/homepage.component';
import { ServicesModule } from './services/services.module';
import { SharedModule } from '../shared/shared.module';
import { MainLayoutComponent } from '../shared/layouts/main-layout/main-layout.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, FeaturesRoutingModule, ServicesModule, SharedModule],
  exports: [],
})
export class FeaturesModule {}
