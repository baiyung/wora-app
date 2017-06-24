import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Http }     from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

// import { parseString } from 'xml2js'
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  // We proxied rssUrl to http://bbs.cloud.icybee.cn/rss/

  // for `ionic serve`
  // private readonly rssUrl = '/rss/board-Picture'

  // for `electron .`
  // private readonly rssUrl = 'http://bbs.cloud.icybee.cn/rss/board-Picture'

  films: Observable<any>;

  public posts: Object[] = []

  constructor(
    public http:    Http,
    public navCtrl: NavController,
  ) {

  }

  ngOnInit() {
    // this.initBuptBbsRss()
//
    this.films = this.http.get('https://api.douban.com/v2/book/search?tag=经典').map(res => res.json());
  }

  openDetails(film) {
    this.navCtrl.push(DetailPage, {film: film});
  }
  // @angular/http
  // initBuptBbsRss() {
  //   this.http.get(this.rssUrl)
  //                   .map(res => res.text()) //toJson(res.text()))
  //                   .subscribe(
  //                     data => {

  //                       const fixedData = data.replace(
  //                                                 /href="\\/g,
  //                                                 'href="#',
  //                                               )
  //                                               .replace(
  //                                                 /src="\//g,
  //                                                 'src="http://bbs.cloud.icybee.cn/',
  //                                               )
  //                       parseString(fixedData, (err, result) => {
  //                         this.posts = result.rss.channel[0].item
  //                         console.log(this.posts)
  //                       })

  //                     },
  //                     err => {
  //                       console.log("Oops!", err);
  //                     }
  //                   )
  // }

}
