import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification/notification.component';
import { CommonServicesModule } from '../common-services';
import { AjaxWaitComponent } from './ajax-wait';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { SecurityModule } from '../security';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NotificationComponent,
    AjaxWaitComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  exports: [
    NotificationComponent,
    AjaxWaitComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule, CommonServicesModule, SecurityModule, RouterModule.forChild([]),
  ]
})
export class MainModule {
  constructor( @Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule has already been loaded.
        Import MainModule once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}
