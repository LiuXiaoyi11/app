import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ViewController} from 'ionic-angular'


@Component({
  templateUrl:'add.html'

})
export class addPage{
  name:any;
  price:any;
  category:any;
  constructor(private navCtrl:NavController ,private view : ViewController){
    }
    addtoMenu(){
      let newItem = {
          name : this.name,
          price: this.price,
          categ: this.category
        };

        this.view.dismiss(newItem);

    }
    close(){
      this.view.dismiss();
    }
}
