import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../../about/about'

@Component({
  templateUrl: 'detail1.html'
})
export class detail1Page {

  constructor(public navCtrl: NavController) {


  }
  amount:number;
  addtoOrder(){
    this.navCtrl.push(AboutPage,{name:'Fried Rice',amount:this.amount,price:15});
  }

}
