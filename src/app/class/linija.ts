import { Stajaliste } from "./stajaliste";

export class Linija {
    id: number;
    polaziste: Stajaliste;
    odrediste: Stajaliste;

    toString = function LinijaToString() {
        return "nestoo"
    }
}
