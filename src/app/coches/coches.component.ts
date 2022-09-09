import { Component } from "@angular/core";
import { Coche } from "./coche";
/*import { PeticionesService } from "../services/peticiones.services"; */

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html',
   /* providers: [PeticionesService] */
})

export class CochesComponent{
    public coche: Coche;
    public coches:Array<Coche> | any;

    constructor(
       /* private _peticionesService: PeticionesService */
    ){
        this.coche = new Coche("","","");
        this.coches=[
            new Coche("Seat","120","Blanco"),
            new Coche("Renault","80","Rojo"),
        ];
    }

    /* ngOnInit(){
        console.log(this._peticionesService.getPrueba());
    } */

    onSubmit(){
       this.coches.push(this.coche);
       this.coche = new Coche("","","");
    }
}