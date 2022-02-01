export class a3 {
    keys = ["Sie geht mir auf die Nerven.", "Oma", "aufpassen auf", "fragen; bitten", "sprechen; reden", "aufhören (mit)", "plaudern;chatten", "sogar; selbst", "freundlich;nett", "Arbeit", "Tierarzt", "Nachbar", "nehmen", "Haustier", "Arztpraxis", "warum", "Vorsicht!Pass auf!", "Kochen", "Dialog", "herausfinden", "Situation", "Redner;Sprecher", "Worum geht es in/im...?", "sich handeln um", "sich verbessern", "aufwärmen", "Mund", "Ton;Klang;Geräusch", "fit werden", "Rythmus","aufstehen(von einer Sitzgelegenheit)", "Klatsch in die Hände.", "laut", "sehr", "sprechen", "klar;deutlich", "eine Theaterszene spielen", "zu(zu Müde)", "Szene", "typisch", "Laud", "interessant", "schauen", "schauen", "morgens", "spielen(Theater)", "gut sein in", "waschen", "Gesicht", "machen;tun", "früh", "auf Wiedersehen", "bellen", "Angs haben(vor)", "wegrennen", "Spaß haben", "horchen auf", "Sitz! Platz!","um ...herum; umher", "Schwanz", "viel zu lernen", "setzen", "Getränk", "hinfallen;umkippen", "werfen", "Schuh", "einschlafen"];
    values = ["She gets on my nerves.", "granny", "to look after", "to ask", "to talk", "to stop", "to chat", "even", "friendly", "work", "vet", "neighbour", "to take", "pet", "surgery", "why", "Be careful!", "cooking", "dialogue", "to find out", "situation", "speaker", "What is...about", "to be about", "to improve", "to warm up", "mouth", "sound", "to get fit", "rythm", "to stand up", "Clap your hands.", "loud", "very much", "to speak", "clear", "acting a scene", "too", "scene", "typical", "country", "interesting", "interesting", "to look", "in the mornings", "to act", "to be good at", "to wash", "face", "to make", "early", "goodbye", "to bark", "to be scared(of)", "to run away", "to have fun", "to listen for", "Sit!", "around", "tail", "a lot to learn", "to put", "drink", "to fall over", "to throw", "shoe", "to fall asleep"]; 

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