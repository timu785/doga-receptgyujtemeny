import { ReceptElonezet } from "./ReceptElonezet.js";

export class Receptek{
    #receptLista;
    #receptTarolo;
    constructor(receptLista, receptTarolo){
        this.#receptLista = receptLista;
        this.#receptTarolo = receptTarolo;
        this.megjelenit();
    }

    megjelenit(){
        for (let i = 0; i < this.#receptLista.length; i++) {
            new ReceptElonezet(this.#receptLista[i], this.#receptTarolo);
        }
    }
}