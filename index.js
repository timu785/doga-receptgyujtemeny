import { receptLista } from "./receptekLista.js";
import { Receptek } from "./receptek.js";
import { Recept } from "./Recept.js";

const receptTarolo = document.getElementById("recept-tarolo");
const reszletesMegjelenites = document.getElementById("reszletes-megjelenites-div");

new Receptek(receptLista, receptTarolo);
new Recept(receptLista, reszletesMegjelenites);

