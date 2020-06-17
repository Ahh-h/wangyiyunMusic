import { Injectable, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from '../services.module';
import { Observable } from 'rxjs';
import { Banner, PlayListHot, SongSheet } from '../data-type/common-data-type';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators'
// providedIn: 'root'=> root表示由根模块提供的服务，可以更换为其他模块
// 之前可以放在模块的provider里面，但是webpack的tree shaking不能判断该服务是否被使用
// 所以使用providedIn更佳
@Injectable({
  providedIn: ServicesModule
})
export class HomeService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private url: string) { }
  // 获取轮播图
  getBanner(): Observable<Banner[]> {
    return this.http.get(this.url + 'banner').pipe(
      // 由于返回的结果是一个对象，而我们需要的是Banner[]的数组，则使用map操作符处理一下
      // 如果不指定res的类型，会报错
      map((res: {banners: Banner[]}) => res.banners)
    )
  }

  // 获取playlist/hot热门歌单分类
  getHotTags(): Observable<PlayListHot[]> {
    return this.http.get(this.url + "playlist/hot").pipe(
      map((res: {tags: PlayListHot[]}) => {
        return res.tags.sort((x: PlayListHot,y: PlayListHot) => {
          return x.position - y.position;
        }).slice(0, 5);
      })
    );
  }

  getPersonalSheetList(): Observable<SongSheet[]> {
    return this.http.get(this.url + "personalized").pipe(
      map((res: {result: SongSheet[]}) => res.result.slice(0, 16))
    )
  }
}
