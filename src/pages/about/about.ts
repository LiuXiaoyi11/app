import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular'

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit {
  ngOnInit(): void {
    this.list = JSON.parse(localStorage.getItem('list'));
    this.list.push(this.navp.data);
    localStorage.setItem('list', JSON.stringify(this.list));
    this.total = this.navp.get('amount') * this.navp.get('price');
  }
  list: any[];
  total: number;

  constructor(public navp: NavParams, public navCtrl: NavController) {
    this.list = [];
    localStorage.setItem('list', JSON.stringify(this.list));
  }
  checkout() {
    this.navCtrl.popToRoot();
  }

}
