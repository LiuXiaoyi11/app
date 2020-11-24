import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {detail1Page} from '../home/detail1/detail1'
import {detail2Page} from '../home/detail2/detail2'
import {detail3Page} from '../home/detail3/detail3'
import{addPage}from'../add/add'
import {ModalController} from 'ionic-angular'
import {data} from '../storage/storedata'



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Menus:any[];
  constructor(public navCtrl: NavController,  private navp: NavParams,
     private modal:ModalController,private data: data) {
        this.Menus=[];
        this.data.returnd().then((val)=>{
          if(val){
            this.Menus=JSON.parse(val);
          }
        })

  }
  goTodetail1(){
    this.navCtrl.push(detail1Page);
  }
  goTodetail2(){
    this.navCtrl.push(detail2Page);
  }
  goTodetail3(){
    this.navCtrl.push(detail3Page);
  }
  gotoadd(){
    let addp= this.modal.create(addPage);
    addp.onDidDismiss((items)=>{
      if(items){
      this.Menus.push(items);
      this.data.save(this.Menus);
      console.log(this.Menus);
    }
  });
  addp.present();
  }
  clean(){
    this.data.clean();
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }
}
