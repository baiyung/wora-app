import { Component } from '@angular/core';
import { Http }     from '@angular/http';
import { NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  film: any;
  film1:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http:    Http) {
  }
//+ this.navParams.get('film').id.toString()
  ngOnInit() {
	this.film = this.navParams.get('film');
  }

  
ionViewDidLoad() {
    console.log(this.film);
  }
}