import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home/home.service';
import { Banner } from 'src/app/services/data-type/banner-data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners: Banner[];
  array = [1,2,3,4];

  constructor(private homeServe: HomeService) { }

  ngOnInit(): void {
    this.homeServe.getBanner().subscribe(banners =>
      this.banners = banners
    )
  }

}
