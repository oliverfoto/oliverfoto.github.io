/* =========================================================
   TADY UPRAVUJEŠ OBSAH WEBU
   ---------------------------------------------------------
   Jak přidat vlastní fotku:
   1) Nahraj fotku do složky "fotky" (např. fotky/portret-01.jpg)
   2) Níže přepiš "soubor" na "fotky/portret-01.jpg"
   3) Vyplň "nazev" a "kategorie"

   Tip: fotky před nahráním zmenši na cca 2000 px na delší
   straně a ulož jako JPG (kvalita ~80 %), web pak bude rychlý.
   ========================================================= */

// Úvodní velká fotka nahoře na stránce
const UVODNI_FOTKA = {
  soubor: "https://picsum.photos/seed/oliver-hero/1200/1500",
  nazev: "Úvodní fotografie"
};

// Kategorie v galerii — "id" se píše k fotkám, "nazev" se zobrazí na webu
const KATEGORIE = [
  { id: "portret",   nazev: "Portrét" },
  { id: "krajina",   nazev: "Krajina" },
  { id: "produkt",   nazev: "Produkt" },
  { id: "atelier",   nazev: "Ateliér" },
  { id: "cernobila", nazev: "Černobílá" }
];

// Fotky v galerii
const GALERIE = [
  { soubor: "https://picsum.photos/seed/of-01/800/1000", nazev: "Portrét v okně",       kategorie: "portret" },
  { soubor: "https://picsum.photos/seed/of-02/1000/700", nazev: "Ráno nad údolím",      kategorie: "krajina" },
  { soubor: "https://picsum.photos/seed/of-03/800/800",  nazev: "Šálek",                kategorie: "produkt" },
  { soubor: "https://picsum.photos/seed/of-04/800/1100", nazev: "Rembrandtovo světlo",  kategorie: "atelier" },
  { soubor: "https://picsum.photos/seed/of-05/1000/750", nazev: "Ulice po dešti",       kategorie: "cernobila" },
  { soubor: "https://picsum.photos/seed/of-06/800/1000", nazev: "Spolužačka",           kategorie: "portret" },
  { soubor: "https://picsum.photos/seed/of-07/800/1050", nazev: "Les v mlze",           kategorie: "krajina" },
  { soubor: "https://picsum.photos/seed/of-08/1000/700", nazev: "Hodinky na plátně",    kategorie: "produkt" },
  { soubor: "https://picsum.photos/seed/of-09/800/1000", nazev: "Low key",              kategorie: "atelier" },
  { soubor: "https://picsum.photos/seed/of-10/800/900",  nazev: "Stíny",                kategorie: "cernobila" },
  { soubor: "https://picsum.photos/seed/of-11/1000/680", nazev: "Pole v létě",          kategorie: "krajina" },
  { soubor: "https://picsum.photos/seed/of-12/800/1000", nazev: "Profil",               kategorie: "portret" }
];

// Projekty / školní zadání
const PROJEKTY = [
  {
    nazev: "Portrét s jedním světlem",
    datum: "Září 2026",
    popis: "Zadání z ateliéru: vytvořit sérii portrétů pouze s jedním zdrojem světla a zkoumat, jak jeho pozice mění náladu fotografie.",
    technika: ["Ateliér", "1× softbox", "85 mm", "f/2.8"],
    fotky: [
      "https://picsum.photos/seed/pr1-a/800/1000",
      "https://picsum.photos/seed/pr1-b/800/1000",
      "https://picsum.photos/seed/pr1-c/800/1000"
    ]
  },
  {
    nazev: "Město v černobílé",
    datum: "Říjen 2026",
    popis: "Street fotografie v ulicích města. Cílem bylo pracovat s kontrastem, linkami a geometrií bez rozptylující barvy.",
    technika: ["Exteriér", "35 mm", "Černobílá konverze"],
    fotky: [
      "https://picsum.photos/seed/pr2-a/1000/750",
      "https://picsum.photos/seed/pr2-b/1000/750",
      "https://picsum.photos/seed/pr2-c/1000/750"
    ]
  },
  {
    nazev: "Produktová fotografie",
    datum: "Listopad 2026",
    popis: "Fotografie produktu na bílém pozadí pro e-shop. Důraz na čisté pozadí, ostrost a správné podání barev.",
    technika: ["Ateliér", "Světelný stan", "100 mm makro", "f/11"],
    fotky: [
      "https://picsum.photos/seed/pr3-a/800/800",
      "https://picsum.photos/seed/pr3-b/800/800",
      "https://picsum.photos/seed/pr3-c/800/800"
    ]
  }
];
