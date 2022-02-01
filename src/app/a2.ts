export class a2 {
    keys = ["Käse", "vormittags (Uhrzeit)", "nachmittags (Uhrzeit)", "Überraschung", "Koch-AG", "Klub; Verein", "mit (dem Fahrrad)", "sich hinsetzen", "früstücken", "Es ist Zeit aufzustehen!", "aufräumen", "Machst du so ...?", "schlafen", "ins Bett gehen", "wie spät ist es?", "jede", "kommen", "nach Hause", "Abendessen", "um halbb acht", "dann; danach", "nie; niemals", "Morgen; Vormittags", "Stiefmutter", "wenn; falls; ob", "bis", "danach", "montags", "Korbball", "sofort; gleich", "anders", "oft", "häufig", "abends", "Abend", "machmal", "finden", "normalerweise", "gewöhnlich", "lang", "Ich bin hundemüde.", "müde", "Nachmittag", "perfekt", "schnarchen", "Zimmergenosse", "Trainer", "Bewegung", "schlecht; böse", "letzte", "morgen"  ];
    values = ["cheese", "a.m.", "p.m.", "surprise", "Cooking Club", "club", "by (bike)", "to sit down", "to have breakfast", "Time to get up!", "to tidy (a room)", "Is this how you (do) ...?", "to sleep", "to go to bed", "What's the time?", "every", "to come", "home", "dinner", "at 7:30", "then", "never", "morning", "stepmum", "if", "till", "after that", "on Mondays", "netball", "right away", "other", "often", "in the evening", "evening", "sometimes", "to find", "usually", "long", "I'm dog-tired.", "tired", "afternoon", "perfect", "to snore", "roommate", "coach", "move", "bad", "last", "tomorrow"];

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