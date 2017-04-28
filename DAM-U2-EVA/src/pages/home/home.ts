//cordova plugin add cordova-sqlite-storage --save
//npm install --save @ionic/storage
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bienvenida } from '../bienvenida/bienvenida';
import {Storage} from '@ionic/storage'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public myForm: FormGroup;
  public usuario:any;
  public password:any;
  public usr: any
  public pass:any
  

  constructor(public navCtrl: NavController,public fb:FormBuilder, public storage: Storage) {
    this.myForm=this.fb.group({
      usuario:["",[Validators.required, Validators.pattern(/^([a-z\.]{8,15})$/)]],
      password:["",[Validators.required, Validators.pattern(/^(([(|@#%&0-9a-z)_\.-]){6,15})+$/)]]
                      ///^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)]],
    });
  }

  

  gotoBienvenida(){
    this.storage.ready().then(() => {
      this.storage.set('usuario', this.usr);
      this.storage.get('usuario').then((val) => {
         console.log(val);
       })
      
    });

    if(this.usr=="joanrodriguezhe" && this.pass=="13400484@ittepic"){
      this.navCtrl.push(Bienvenida); 
    }
    this.navCtrl.push(Bienvenida); 
  }

}
