import { Stajaliste } from "./stajaliste";

export class Linija {
    polaziste: Stajaliste;
    odrediste: Stajaliste;

    toString = function LinijaToString() {
        return "nestoo"
    }


    // toString(): string {
    //     return this.polaziste.naziv + this.odrediste.naziv;
    // }
}


Linija.prototype.toString = function() {
    return "aasdadasds";
}