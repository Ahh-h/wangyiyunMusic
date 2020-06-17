import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'playCount'
})
// 实现了PipeTransform这个接口
export class PlayCountPipe implements PipeTransform {

  // 在transform里面写逻辑，value为返回数据的类型
  transform(value: number): number | string {
    if (value > 10000) {
      return Math.floor(value / 10000) + "万";
    } else {
      return value;
    }
  }

}
