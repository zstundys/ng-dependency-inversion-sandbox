import { NgModule } from '@angular/core';
import { NgIconsModule } from '@ng-icons/core';
import { FeatherLoader, FeatherRefreshCw } from '@ng-icons/feather-icons';

@NgModule({
  declarations: [],
  imports: [NgIconsModule.withIcons({ FeatherLoader, FeatherRefreshCw })],
  exports: [NgIconsModule],
})
export class IconsModule {}
