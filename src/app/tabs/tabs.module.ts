import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { AlertController } from '@ionic/angular';
import { SharedModule } from 'src/shared/modules/share.module';

@NgModule({
  imports: [
    IonicModule.forRoot({ mode: 'ios' }),
    CommonModule,
    FormsModule,
    SharedModule,
    TabsPageRoutingModule
  ],
  declarations: [TabsPage],
})
export class TabsPageModule {}
