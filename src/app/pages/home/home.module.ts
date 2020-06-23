import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { WyCarouselComponent } from './components/wy-carousel/wy-carousel.component';
import { ShareModule } from 'src/app/share/share.module';
import { MemberCardComponent } from './components/member-card/member-card.component';

// 用来管理所有的页面模块，只用把share模块引用进来就行了
// 每个页面都能用到shareModule所有的模块，不用每个页面都去单独引入这些东西
@NgModule({
  declarations: [HomeComponent, WyCarouselComponent, MemberCardComponent],
  imports: [
    HomeRoutingModule,
    ShareModule
  ]
})
export class HomeModule { }
