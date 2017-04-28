import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Storage} from '@ionic/storage'
import {FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class Formulario {
  public usr:any;
  public myForm: FormGroup;
  public nombre:any;
  public apellidop:any;
  public apellidom:any;
  public fecha:any;
  

  public valNombre:any;
  public valApellidop:any;
  public valApellidom:any;
  public valFecha:any;
  public valRfc:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public fb:FormBuilder, public storage: Storage) {
    storage.ready().then(() => {
      storage.get('usuario').then((val) => {
         this.usr=val;
       })
    });
    this.myForm=this.fb.group({
      nombre:["",Validators.required],
      apellidop:["",Validators.required],
      apellidom:["",Validators.required],
      fecha:["",Validators.required]
    });

  }

  calcular() {
    let p1="";
    let p2="";
    let p3="";
    let p4="";

  let arvalNombre=this.valNombre.split("");
  let arvalApellidop=this.valApellidop.split("")
  let arvalApellidom=this.valApellidom.split("")
  let arvalFecha=this.valFecha.split("")

  p1=arvalApellidop[0]+arvalApellidop[1];
  p2=arvalApellidom[0];
  p3=arvalNombre[0];
  p4=arvalFecha[2]+arvalFecha[3]+arvalFecha[5]+arvalFecha[6]+arvalFecha[8]+arvalFecha[9];
  
  this.valRfc=""+p1+p2+p3+p4;
    
  }

}
