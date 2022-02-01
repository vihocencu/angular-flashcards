export class a4 {
    keys = ["Wie man...", "bescihtigen; besuchen", "wichtig", "diese(hier)", "Seite","was man...", "englischsprachig", "Aufwärmübung", "Lächeln", "Entschuldigung!", "natürlich; selbstverständlich", "(ein Bonbon) nehmen", "Bitte schön.; Nichts zu danken.; Gern geschehen.", "Limonade", "Stundenplan; Fahrplan;", "im Weg sein/stehen", "Weg", "Busbahnhof", "Person; Mensch", "Box; Kasten; Schachtel; Kiste", "öffnen; aufmachen", "Zug", "Fenster", "zu Hause", "in der Schule", "am (Bus)bahnhof", "in Großbritannien", "in Greenwich", "im Hause", "im Park", "auf der Straße", "im Bus", "im Zug", "im Auto", "halten; festhalten", "offen; geöffnet; aufgeschlagen", "Frau, Frauen", "Mann, Männer", "sich vordrängeln", "britisch; Britte/Brittin", "Rolltreppe", "stehen", "gehen"];
    values = ["How to...","to visit", "important", "these", "Page", "what to...", "Englisch-speaking", "warm-up", "smile", "Excuse me...", "of course", "to have a sweet", "You're welcome.", "lemonade", "timetable", "to be in the way", "way", "bus station", "person, people", "box", "to open", "train", "window", "at home", "at school", "at the (bus/train) station", "in Britain", "in Greenwich", "in the house", "in the park", "in the park", "in the street", "on the bus", "on the train", "in the car", "open", "woman, women", "man, men", "to jump the queue", "British", "escalator", "to stand", "to walk"]; 

    getKey(index:number):string {
        return this.keys[index];
    }
    getValue(index:number) : string{
        return this.values[index];
    }
    getKeys() {
        return this.keys;
    }
    getValues() {
        return this.values;
    }
}