import { Component } from '@angular/core';
import {NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage'
import { Formulario } from '../formulario/formulario';

@Component({
  selector: 'page-bienvenida',
  templateUrl: 'bienvenida.html',
})
export class Bienvenida {
  public usr:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, storage: Storage) {
    storage.ready().then(() => {
      storage.get('usuario').then((val) => {
         this.usr=val;
       })

    });
    console.log(this.usr);
  }

  gotoFormulario(){
    this.navCtrl.push(Formulario);
  }

}
