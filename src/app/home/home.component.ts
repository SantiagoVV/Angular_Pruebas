import { Component } from "@angular/core";
import { RopaService } from "../services/ropa.service";

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [RopaService]
})

export class HomeComponent{
    public titulo = "Pagina principal";
    public listado_ropa:Array<string> | any;
    public prenda_a_guardar:string | any;

    public fecha: any;
    public nombre = "Juan lopez martinez"


    constructor(
        private _ropaService: RopaService
    ){
        this.fecha = new Date(2022,7,1)
    }

    ngOnInit(){
        this.listado_ropa = this._ropaService.getRopa();
        console.log(this._ropaService.prueba('Camisa'));
    }

    guardarPrenda(){
        this._ropaService.addRopa(this.prenda_a_guardar);
    }

    eliminarPrenda(index:number){
        this._ropaService.deleteRopa(index);
        alert(index);
    }
}
