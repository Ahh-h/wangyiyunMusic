import { Component, OnInit, ViewChild } from '@angular/core';
// import { HomeService } from 'src/app/services/home/home.service';
import { Banner, PlayListHot, SongSheet, Singer } from 'src/app/services/data-type/common-data-type';
import { NzCarouselComponent } from 'ng-zorro-antd';
// import { SingerService } from 'src/app/services/singer/singer.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/internal/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  carouselActiveIndex = 0;
  @ViewChild(NzCarouselComponent, {static: true}) private nzCarousel: NzCarouselComponent;
  banners: Banner[];
  hotTags: PlayListHot[];
  songSheetList: SongSheet[];
  singers: Singer[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // 从守卫中返回了四种数据，使用结构的方式获取数据
    this.route.data.pipe(map(res => res.homeData)).subscribe( ([banners, tags, songSheet, singers]) => {
      this.banners = banners;
      this.hotTags = tags;
      this.songSheetList = songSheet;
      this.singers = singers;
    })
    // this.getBannerList();
    // this.getPlaylistHotList();
    // this.getPersonalSheetList();
    // this.getEnterSingers();
  }

  // 获取轮播图的list
  // getBannerList() {
  //   this.homeSerive.getBanner().subscribe(banners =>
  //     this.banners = banners
  //   )
  // };

  // 获取热门歌单的分类
  // getPlaylistHotList() {
  //   this.homeSerive.getHotTags().subscribe(tags =>
  //     this.hotTags = tags
  //   )
  // }

  // 获取歌单
  // getPersonalSheetList() {
  //   this.homeSerive.getPersonalSheetList().subscribe(songSheet =>
  //     this.songSheetList = songSheet
  //   )
  // }

  // 获取首页默认的歌手
  // getEnterSingers() {
  //   this.singerService.getSingers().subscribe(singers => {
  //     console.log(singers);
  //     this.singers = singers;
  //     }
  //   )
  // }

  // 轮播图切换以后触发的方法
  onBeforeChange($event){
    this.carouselActiveIndex = $event.to;
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }
}
