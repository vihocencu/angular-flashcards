export class a1 {
    keys = ["Ich bin aus Greenwich" , "Schau!" , "zwei Junge und ein Hund", "im Greenwich Park", "Hunde sind meine Freunde, aber Katzen nicht.", "Ich bin eine Maus.", "Maus/Mäuse", "Hier ist dein Ball.", "Hallo.", "Ich heiße Pia.", "Du bist ein lieber Hund.", "Wie heißt du?", "Entschuldigung!", "Mein Hund ist verrückt.", "Ich heiße Luke.", "Wir sind aus Greenwich.", "Woher kommst du?", "Sind Sie im Urlaub?", "ja", "Ich bin mit meinen Eltern hier.", "Wie alt bist du?", "Du auch?", "nein", "deutsch", "anders; unterschiedlich", "Ich bin Engländer/-in.", "Ich liebe Hunde." , "Hunde lieben Eichhörnchen.", "Das war knapp!", "Tier", "Danke.", "Das ist Pia.", "ein Mädchen aus Deutschland", "Schule", "Greenwich Park ist groß.", "Es ist super zum Radfahren.", "Ich fahre nicht gern Rad.", "Mein Lieblingssport ist Fußball.", "Ich mag den See mit Booten.", "Was ist das?", "Lass uns hingehen!", "Es macht Spaß.", "Ratte", "Ich habe keine Angst vor Hunden.", "Ich habe Angst vor Katzen.", "Würmer sind o.k.", "Kaninchen sind nett.", "Sie sind meine Freunde.", "Sie essen keine Mäuse.", "Wort", "Inlineskatefahren ist toll.", "Volleyball ist ein toller Sport.", "Farbe", "Was ist deine Lieblingsfarbe?", "Bild; Foto", "Leute; Menschen", "Ding; Sache", "Zahl; Nummer", "Tisch", "Dusche", "Bad", "Toilette", "Bett", "Uhr", "Kleiderschrank", "Küchenschrank", "Herd","Wohnzimmer", "Schlafzimmer", "Küche", "Bad; Badezimmer", "gut", "Keks", "unter", "helfen", "sammeln", "neu", "klein"];
    values = ["I'm from Greenwich", "Look", "two boys and a dog", "in Greenwich Park",           " Dogs are my friends, but not cats.",           "I'm a mouse.", "Mouse/Mice", "Hier's your ball.", "Hello.", "I'm Pia.", "You're a nice dog.", "What's your name?", "Sorry!", "My dog is crazy.", "My name is Luke.", "We're from Greenwich.", "Where are you from?", "Are you in holiday?", "yes", "I'm hier with my parents.", "How old are you?", "You too?", "no", "German", "different", "I'm Englisch.", "I love dogs.", "Dogs love squirrels.", "That was close!", "animal", "Thank you.", "This is Pia.", "a girl from Germany", "school", "Greenwich Park is big.", "It's great for cycling.", "I don't like cycling", "My favourite sport is football.", "I like the boating lake.", "What's that?", "Let's go!", "It's fun.", "rat", "I'm not scarred of dogs.", "I'm scarred of cats.", "Worms are ok.", "Rabbits are nice.", "They're my friends.", "They don't eat mice.", "word", "Inline skating is great.", "Volleyball is a great sport.", "colour", "What's your favourite colour?", "picture", "people", "thing", "number", "table", "shower", "bath", "toilet", "bed", "clock", "wardrobe", "cupboard","cooker", "living room", "bedroom", "kitchen", "bathroom", "good", "biscuit", "under", "to help", "to collect", "new", "small"]; 

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