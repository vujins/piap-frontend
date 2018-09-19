import { Prevoznik } from "./prevoznik";
import { Linija } from "./linija";
import { Vozac } from "./vozac";
import { Autobus } from "./autobus";

export class LinijaMedjugradska {
    id: number; 
    polazak: string;
    dolazak: string;
    vozac: Vozac;
    prevoznik: Prevoznik;
    autobus: Autobus;
    medjulinije: Linija[];

    constructor() {
        this.vozac = new Vozac();
        this.prevoznik = new Prevoznik();
        this.autobus = new Autobus();
        this.medjulinije = new Array<Linija>();
    }

    // constructor(prevoznik: Prevoznik, polazak: Date, medjulinije: Linija[]) {
    //     this.prevoznik = prevoznik;
    //     this.polazak = polazak;
    //     this.medjulinije = medjulinije;
    // }
}
