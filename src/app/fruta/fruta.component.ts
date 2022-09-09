import { Component } from "@angular/core";

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html' ,

})
export class FrutaComponent{
    public nombre_componente = 'Componente de fruta'
    public listado_frutas = 'Naranja, manzana, pera y sandia'
    
    public nombre:string = "Keksimus"
    public edad:number = 10;
    public truefalse:boolean = true;
    public trabajos:Array<any> = ["car",4,"kek"]
    comodin:any = "todo";

    constructor(){  /*  Para dar valores a las variables */
        this.nombre = 'hey';
        
    }
    ngOnInit(){   /*  Para llamar las funciones iniciales */
        this.holaMundo(this.nombre);
        this.cambiarNombre();

        var uno = 8;
        var dos = 15;

        if(uno === 8){
            let uno = 3;  /*  solo tiene este valor dentro de este if */
            var dos = 88; /*  esta es global */
            console.log("Dentro del If "+ uno)
        }
        console.log("fuera del If "+ uno)
    }

    holaMundo(nombre:any){
        alert('Hola mundo ' + nombre);
    }

    cambiarNombre(){
        this.nombre = 'Juan';
    }
}