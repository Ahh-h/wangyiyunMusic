import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NzLayoutModule } from 'ng-zorro-antd/layout';
// import { NzInputModule } from 'ng-zorro-antd/input';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { WyUiModule } from './wy-ui/wy-ui.module';


// 用来存放全局经常用到的指令，模块，组件等，是共享的模块，所以需要导出才行
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    WyUiModule
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    WyUiModule
  ]
})
export class ShareModule { }
