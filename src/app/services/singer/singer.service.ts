import { Injectable, Inject } from '@angular/core';
import { ServicesModule, API_CONFIG } from '../services.module';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Singer } from '../data-type/common-data-type';
import { map } from 'rxjs/internal/operators';
import queryString from 'query-string';

type enterSingerReq = {
  offset: number;
  limit: number;
  cat?: string//可选参数，默认为1001
}

// 在主页默认展示推荐歌手的数据，所以可以弄一个固定参数
const defaultEnterSingerReq: enterSingerReq= {
  offset: 0,
  limit: 9,
  cat: '5001'
}

@Injectable({
  providedIn: ServicesModule
})
export class SingerService {

  constructor(private http: HttpClient, @Inject(API_CONFIG) private url: string) { }

  // 在主页是默认展示的,参数args有一个默认值defaultEnterSingerReq
  getSingers(args: enterSingerReq = defaultEnterSingerReq): Observable<Singer[]> {
    // queryString.stringify()是将对象转化为字符串
    const params = new HttpParams({ fromString: queryString.stringify(args) });
    return this.http.get(this.url + 'artist/list', { params }).pipe(
      map((res: {artists: Singer[]}) => res.artists)
    )
  }
}
