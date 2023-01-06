import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { EnvioFormularioService } from 'src/app/servicios/envio-formulario.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder:FormBuilder, private envioFormularioService:EnvioFormularioService, private ruta:Router) {

    this.form=this.formBuilder.group(
      {
        nombre:['',Validators.required],
        asunto:['',Validators.required],
        email:['',[Validators.required,Validators.email]],
        telefono:[,Validators.required]
      }
    )

  }

  ngOnInit(): void {
  }

  get Email(){
    return this.form.get('email')
  }
  
  get Nombre(){
    return this.form.get('nombre')
  }

  get Asunto(){
    return this.form.get('asunto')
  }
  
  get Telefono(){
    return this.form.get('telefono')
  }

  onEnviar(event:Event){
    event.preventDefault;
    this.envioFormularioService.IniciarSesion(this.form.value).subscribe(data=>{
      console.log("DATA:" + JSON.stringify(data))
      this.ruta.navigate(['/exito'])  
    })
  }
}
