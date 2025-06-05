export class ReceptElonezet{
    #nev;
    #kep;
    #leiras;
    #hozzavalok;
    #kedvenc;
    #kategoria;
    #receptTarolo;
    constructor(receptObjektum, receptTarolo){
        this.#nev = receptObjektum.nev;
        this.#kep = receptObjektum.kep;
        this.#leiras = receptObjektum.leiras;
        this.#hozzavalok = receptObjektum.hozzavalok;
        this.#kedvenc = receptObjektum.kedvenc;
        this.#kategoria = receptObjektum.kategoria;

        this.receptTarolo = receptTarolo;
        //this.test()
        this.megjelenit();
    }

    megjelenit(){
        let html = `
        <div class="recept">
            <h2 class="recept-nev">${this.#nev}</h2>
            <img class="recept-kep" src="${this.#kep}" alt="${this.#nev}">
            <h2 class="recept-kategoria">${this.#kategoria}</h2>
            <h2 class="recept-kedvenc">${this.#kedvenc}</h2>
        </div>
        `;
        this.receptTarolo.insertAdjacentHTML("beforeend", html);
    }




    test(){
        console.log(this.#nev);
        console.log(this.#kep);
        console.log(this.#leiras);
        console.log(this.#hozzavalok);
        console.log(this.#kedvenc);
        console.log(this.#kategoria);
    }
}