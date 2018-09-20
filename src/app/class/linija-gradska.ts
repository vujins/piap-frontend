import { Vozac } from "./vozac";
import { Linija } from "./linija";

export class LinijaGradska {
    broj_linije: number;
    red_voznje: string;
    vozac: Vozac = new Vozac();
    medjulinije: Array<Linija> = new Array<Linija>();
}
