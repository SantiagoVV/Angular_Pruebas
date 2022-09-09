import { Component } from "@angular/core";
import { Empleado } from "./empleado";

@Component({
    selector: 'empleados',
    templateUrl: './empleados.component.html' ,

})
export class EmpleadosComponent{
    public titulo_componente = 'Componente empleados'
    public trabajador_externo!:boolean;
    public empleado!: Empleado;
    public trabajadores!:Array<Empleado>;
    public color!:string;
    public color_seleccionado!:string;
    

    ngOnInit(){
        this.empleado = new Empleado('David',20,'Cocinero',false);
        this.trabajadores = [
            new Empleado('David',20,'Cocinero',true),
            new Empleado('Alex',24,'Cocinero',true),
            new Empleado('Pedro',10,'estudiante',false),
        ]
        console.log(this.empleado);
        console.log(this.trabajadores);

        this.trabajador_externo = true;
        this.color = 'blue';
        this.color_seleccionado = '#ccc';
    }
   
    cambiarExterno(valor:boolean){
        this.trabajador_externo = valor;
    }

    logColorSeleecionado(){
        console.log(this.color_seleccionado);
    }
}