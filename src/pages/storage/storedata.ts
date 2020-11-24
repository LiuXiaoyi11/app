import { Storage} from '@ionic/storage';
import { Injectable} from '@angular/core'

@Injectable()
export class data{
  constructor(private storage:Storage){
  }
  save(item:any){
    this.storage.set('mydata',JSON.stringify(item))
  }
  returnd():any{
    return this.storage.get('mydata');
  }
  clean(){
    this.storage.clear();
  }
}
