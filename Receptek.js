import { ReceptElonezet } from "./ReceptElonezet.js";

export class Receptek{
    #receptLista;
    #receptTarolo;
    #elem;
    constructor(receptLista, receptTarolo){
        this.#receptLista = receptLista;
        this.#receptTarolo = receptTarolo;
        this.megjelenit();
        this.#elem = document.getElementById("recept-tarolo");
        this.eventListenerHozzaAdas();
    }

    megjelenit(){
        console.log(this.#elem);
        this.#elem.innerHTML = "";
        for (let i = 0; i < this.#receptLista.length; i++) {
            new ReceptElonezet(this.#receptLista[i], this.#receptTarolo);
        }
    }
    eventListenerHozzaAdas(){
        this.#elem.addEventListener("click", function(){
            console.log("asd");
        });
    }
}