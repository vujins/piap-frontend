import { Prevoznik } from "./prevoznik";
import { Linija } from "./linija";

export class LinijaMedjugradska {
    prevoznik: Prevoznik;
    polazak: Date;
    medjulinije: Linija[];

    constructor(prevoznik: Prevoznik, polazak: Date, medjulinije: Linija[]) {
        this.prevoznik = prevoznik;
        this.polazak = polazak;
        this.medjulinije = medjulinije;
    }
}
