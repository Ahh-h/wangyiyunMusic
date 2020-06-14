import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';

// 平时我们使用到的api_url太多，需要将其抽出来
export const API_CONFIG = new InjectionToken('ApiConfigToken');

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    // 可以直接在provide后面写一个字符串，但是可读性不好
    { provide: API_CONFIG, useValue: 'http://localhost:3000' }
  ]
})
export class ServicesModule { }
