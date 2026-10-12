/* =========================================================
   TADY UPRAVUJEŠ OBSAH WEBU
   ---------------------------------------------------------
   Jak přidat vlastní fotku:
   1) Nahraj fotku do složky "fotky" (např. fotky/portret-01.jpg)
   2) Níže přepiš "soubor" na "fotky/portret-01.jpg"
   3) Vyplň "nazev" a "kategorie"

   Údaje o expozici: přidej k fotce  exif: "50 mm · f/2.8 · 1/200 s · ISO 100"
   a zobrazí se pod zvětšenou fotkou (v galerii i u projektů).

   Tip: fotky před nahráním zmenši na cca 2000 px na delší
   straně a ulož jako JPG (kvalita ~80 %), web pak bude rychlý.
   ========================================================= */

// Úvodní velká fotka nahoře na stránce
const UVODNI_FOTKA = {
  soubor: "fotky/dny-nato-02.jpg",
  nazev: "Stíhací letoun s kouřovou stopou — Dny NATO 2026"
};

// Kategorie v galerii — "id" se píše k fotkám, "nazev" se zobrazí na webu
// (kategorie, ve které zatím není žádná fotka, se na webu nezobrazí)
const KATEGORIE = [
  { id: "reportaz",  nazev: "Reportáž" },
  { id: "portret",   nazev: "Portrét" },
  { id: "krajina",   nazev: "Krajina" },
  { id: "produkt",   nazev: "Produkt" },
  { id: "atelier",   nazev: "Ateliér" },
  { id: "cernobila", nazev: "Černobílá" }
];

// Fotky v galerii
const GALERIE = [
  { soubor: "fotky/dny-nato-01.jpg", nazev: "Zásah speciálních jednotek", kategorie: "reportaz", exif: "137 mm · f/8 · 1/250 s · ISO 100" },
  { soubor: "fotky/dny-nato-02.jpg", nazev: "Kouřová stopa",              kategorie: "reportaz", exif: "150 mm · f/11 · 1/500 s · ISO 100" },
  { soubor: "fotky/dny-nato-03.jpg", nazev: "Let na zádech",              kategorie: "reportaz", exif: "150 mm · f/9 · 1/320 s · ISO 100" }
];

// Projekty / školní zadání
const PROJEKTY = [
  {
    nazev: "Dny NATO 2026",
    datum: "19. září 2026",
    popis: "Reportáž z letošního ročníku Dnů NATO v Ostravě, jedné z největších přehlídek armády, policie a záchranných složek v Evropě. Zachytil jsem dynamickou ukázku zásahu policejních speciálních jednotek s obrněnou technikou a pyrotechnikou i akrobacii stíhacích letounů nad letištěm. Největší výzvou bylo udržet ostrost u strojů v rychlém pohybu a trefit ten správný okamžik.",
    technika: ["Olympus E-510", "40–150 mm", "Reportáž", "Denní světlo"],
    fotky: [
      { soubor: "fotky/dny-nato-01.jpg", exif: "137 mm · f/8 · 1/250 s · ISO 100" },
      { soubor: "fotky/dny-nato-02.jpg", exif: "150 mm · f/11 · 1/500 s · ISO 100" },
      { soubor: "fotky/dny-nato-03.jpg", exif: "150 mm · f/9 · 1/320 s · ISO 100" }
    ]
  }
];
