import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AboutPage} from '../../about/about'

@Component({
  templateUrl: 'detail2.html'
})
export class detail2Page {

  constructor(public navCtrl: NavController) {


  }
  amount:number;
  addtoOrder(){
    this.navCtrl.push(AboutPage,{name:'',amount:this.amount,price:8});
  }

}
