import { NgModule, SkipSelf, Optional } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule } from '../pages/pages.module';
import { ServicesModule } from '../services/services.module';
import zh from '@angular/common/locales/zh';
import { registerLocaleData } from '@angular/common';
import { ShareModule } from '../share/share.module';

registerLocaleData(zh);

// 用来管理其他module的大小事务，减轻appModule的压力
// 在appModule中引入codeModule就行了
@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    // 将pagesModule和ServiceModule,shareModule引入到这个coreModule中来
    PagesModule,
    ShareModule,
    ServicesModule,
    AppRoutingModule,
  ],
  exports: [
    ShareModule,
    AppRoutingModule
  ]
})
export class CoreModule { 
  // 我们希望coreModule只能被appModule注入，用以下逻辑来控制，coreModule一但被其他module注入，就会抛出异常
  // CoreModule第一次被引入到appModule时候，parentModule还不存在，此时会跳过抛出异常
  // 若CoreModule之后在其他module被引入时，此时parentModule存在，会抛出错误
  // @SkipSelf装饰器，在查找CoreModule时，跳过自身，不查找自身文件，因为这是在自己的module中查找自己的module,
  // 会导致死循环，所以不查找自身文件，去父module查找
  // @Optional 当coreModule没有被找到时，给parentModule赋值一个null
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if(parentModule) {
      throw new Error("CoreModule 只能被appModule引入");
    }
  }
}
