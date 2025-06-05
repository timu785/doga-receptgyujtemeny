import { receptLista } from "./receptekLista.js";
import { Receptek } from "./receptek.js";

const receptTarolo = document.getElementById("recept-tarolo");

new Receptek(receptLista, receptTarolo);

