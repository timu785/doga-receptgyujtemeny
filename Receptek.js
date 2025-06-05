import { ReceptElonezet } from "./ReceptElonezet.js";

export class Receptek{
    #receptLista;
    #receptTarolo;
    #receptekGomb;
    #kedvenceimGomb;
    constructor(receptLista, receptTarolo){
        this.#receptLista = receptLista;
        this.#receptTarolo = receptTarolo;
        this.#receptekGomb = document.getElementById("receptek-gomb");
        this.#kedvenceimGomb = document.getElementById("kedvenceim-gomb");
        this.megjelenit();
        this.eventListenerekHozzaAdasa();   
    }

    megjelenit(){
        this.#receptTarolo.innerHTML = "";
        for (let i = 0; i < this.#receptLista.length; i++) {
            new ReceptElonezet(this.#receptLista[i], this.#receptTarolo);
        }
    }
    megjelenitKedvenceket(){
        this.#receptTarolo.innerHTML = "";
        for (let i = 0; i < this.#receptLista.length; i++) {
            if(this.#receptLista[i].kedvenc == true){
                new ReceptElonezet(this.#receptLista[i], this.#receptTarolo);
            }
        }
    }
    eventListenerekHozzaAdasa(){
        this.#receptekGomb.addEventListener("click", () => {
            this.megjelenit();
        });
        this.#kedvenceimGomb.addEventListener("click", () => {
            this.megjelenitKedvenceket();
        });
    }
}