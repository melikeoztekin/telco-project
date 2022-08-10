import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { HomepageComponent } from './common/pages/homepage/homepage.component';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ServicesModule,
  ],
})
export class FeaturesModule {}
