import { Component, OnInit } from '@angular/core';
import { ClientespringService } from './service/clientespring.service';
import { Cliente } from './service/Cliente';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  clientes: Cliente[];
  myFormCliente: FormGroup;

  constructor( public servc:ClientespringService){}

  ngOnInit(){
    this.obtenerClientes()

    this.myFormCliente = new FormGroup({
      nombre: new FormControl(''),
      apellido: new FormControl(''),
      direccion: new FormControl(''),
      telefono: new FormControl(''),
      email: new FormControl('')
    });
  }

    obtenerClientes(){
      this.servc.getClientes().subscribe(r=>{
        console.table(r);
        return this.clientes=r
      })
    }

    ingresarDatos(){
        let n = this.myFormCliente.value.nombre;
        let a = this.myFormCliente.value.apellido
        let d = this.myFormCliente.value.direccion
        let t = this.myFormCliente.value.telefono
        let e = this.myFormCliente.value.email

        this.servc.addClinetes(n,a,d,t,e)
        .subscribe(r =>{
          this.obtenerClientes()
          this.myFormCliente = new FormGroup({
            nombre: new FormControl(''),
            apellido: new FormControl(''),
            direccion: new FormControl(''),
            telefono: new FormControl(''),
            email: new FormControl('')
          });
        })
    }


}


