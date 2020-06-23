import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';
import { SingerService } from 'src/app/services/singer/singer.service';
import { Observable, forkJoin } from 'rxjs';
import { Banner, PlayListHot, Singer, SongSheet } from 'src/app/services/data-type/common-data-type';
import { first } from 'rxjs/internal/operators';

type homeDatesType = [Banner[], PlayListHot[], SongSheet[], Singer[]]
@Injectable()
export class HomeResolveService implements Resolve<homeDatesType> {
  constructor( private homeSerive: HomeService, private singerService: SingerService) {}
  resolve(): Observable<homeDatesType>{
    return forkJoin([
        this.homeSerive.getBanner(),
        this.homeSerive.getHotTags(),
        this.homeSerive.getPersonalSheetList(),
        this.singerService.getSingers()
    ]).pipe(first());
  }
}