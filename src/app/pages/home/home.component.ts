import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';
import { Banner, PlayListHot, SongSheet } from 'src/app/services/data-type/common-data-type';
import { NzCarouselComponent } from 'ng-zorro-antd';

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

  constructor(private homeSerive: HomeService) { }

  ngOnInit(): void {
    this.getBannerList();
    this.getPlaylistHotList();
    this.getPersonalSheetList();
  }

  // 获取轮播图的list
  getBannerList() {
    this.homeSerive.getBanner().subscribe(banners =>
      this.banners = banners
    )
  };

  // 获取热门歌单的分类
  getPlaylistHotList() {
    this.homeSerive.getHotTags().subscribe(tags =>
      this.hotTags = tags
    )
  }

  // 获取歌单
  getPersonalSheetList() {
    this.homeSerive.getPersonalSheetList().subscribe(songSheet =>
      {
        console.log(songSheet);
        this.songSheetList = songSheet
      }
      
    )
  }

  // 轮播图切换以后触发的方法
  onBeforeChange($event){
    this.carouselActiveIndex = $event.to;
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }
}
