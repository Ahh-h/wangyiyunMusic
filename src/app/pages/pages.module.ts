import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';


// 用来管理所有的页面模块，只用把share模块引用进来就行了
// 每个页面都能用到shareModule所有的模块，不用每个页面都去单独引入这些东西
@NgModule({
  declarations: [],
  imports: [
    ShareModule
  ]
})
export class PagesModule { }
