import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from "../../about/about";
@Component({
  templateUrl:'detail3.html'
})
export class detail3Page{
  constructor(public navCtrl:NavController){

  }
  amount:number;
  addtoOrder(){
    this.navCtrl.push(AboutPage,{name:"YumCha",amount:this.amount,price:6});
  }

}
