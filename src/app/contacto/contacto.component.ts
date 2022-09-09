import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { Params } from "@angular/router";

@Component({
    selector: 'contacto',
    templateUrl: './contacto.component.html'
})

export class ContactoComponent{
    public titulo = "Pagina de contacto de la web";
    public parametro: any;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router
    ){}

    ngOnInit(){
        this._route.params.forEach((params: Params) =>{
            this.parametro = params['page'];
            console.log(params);
        });
    }

    redirigir(){
        this._router.navigate(['/contacto','tupack.es'])
    }

}