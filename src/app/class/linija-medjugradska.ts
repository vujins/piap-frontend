import { Prevoznik } from "./prevoznik";
import { Linija } from "./linija";
import { Vozac } from "./vozac";
import { Autobus } from "./autobus";

export class LinijaMedjugradska {
    id: number; 
    polazak: Date;
    dolazak: Date;
    vozac: Vozac;
    prevoznik: Prevoznik;
    autobus: Autobus;
    medjulinije: Linija[];

    constructor(prevoznik: Prevoznik, polazak: Date, medjulinije: Linija[]) {
        this.prevoznik = prevoznik;
        this.polazak = polazak;
        this.medjulinije = medjulinije;
    }
}
