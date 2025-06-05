import { ReceptElonezet } from "./ReceptElonezet.js";

export class Recept{
    #receptLista;
    #reszletesMegjelenites;
    #hatraGomb;
    #eloreGomb;
    constructor(receptLista, reszletesMegjelenites){
        this.#receptLista = receptLista;
        this.#reszletesMegjelenites = reszletesMegjelenites;
        this.#hatraGomb = document.getElementById("hatra-gomb");
        this.#eloreGomb = document.getElementById("elore-gomb");
        this.i = 0;
        this.megjelenit();
        this.eventListenerekHozzaAdasa();
    }

    megjelenit(){
        let index = Math.abs(this.i%3);
        let html = `
            <div id="reszletes-megjelenites-div-bal-oszlop">
                <h2>${this.#receptLista[index].nev}</h2>
                <p>${this.#receptLista[index].hozzavalok}</p>
            </div>
            <div>
                <p>${this.#receptLista[index].leiras}</p>
            </div>
            <div>
                <img src="${this.#receptLista[index].kep}" alt="${this.#receptLista[index].nev}">
            </div>
        `;
        this.#reszletesMegjelenites.innerHTML = html;
    }
    eventListenerekHozzaAdasa(){
        this.#hatraGomb.addEventListener("click", () => {
            this.i--;
            this.megjelenit();
        });            
        this.#eloreGomb.addEventListener("click", () => {
            this.i++;
            this.megjelenit();
        });
    }
}