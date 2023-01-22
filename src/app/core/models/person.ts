export class Person {
  id: number;
  sygnaturaCzasowa: string;
  ankieteWypelniaCzasowa: string;
  plecPacjenta: string;
  wiekPacjenta: string;
  wyksztalceniePacjent: string;
  aktywnoscZawodowaPacjenta: string;
  trybPrzyjecia: string;
  decyzjaLeczenia: string;
  czasOczekiwania: string;
  czasFormalnosci: string;
  zyczliwosc: string;
  czy_zapoznano: string;
  sugestie: string;
  czasOczekiwaniaIp: string;
  jakoscOpieki: string;
  jakoscOpiekiPielegniarka: string;
  warunkiOpieki: string;
  czystosc: string;
  zapoznanieZKartka: string;
  sugestieIp: string;
  czyZna: string;
  ocenaDostepnosc: string;
  ocenaPrzekazaniaInformacji: string;
  poszanowanieIntymnosci: string;
  uwagi: string;
  dostepnoscPielegniarek: string;
  zabiegPielegnacyjny: string;

  constructor(id: number = null, aktywnoscZawodowaPacjenta: string = '', ankieteWypelniaCzasowa: string = '', czasFormalnosci: string = '',
  czasOczekiwania: string = '', czasOczekiwaniaIp: string = '', czyZna: string = '', czy_zapoznano: string = '', czystosc: string = '', decyzjaLeczenia: string = '',
  dostepnoscPielegniarek: string = '', jakoscOpieki: string = '', jakoscOpiekiPielegniarka: string = '',ocenaDostepnosc: string = '', ocenaPrzekazaniaInformacji: string = '', plecPacjenta: string = '',
  poszanowanieIntymnosci: string = '', sugestie: string = '', sugestieIp: string = '',sygnaturaCzasowa: string = '', trybPrzyjecia: string = '', uwagi: string = '',
  warunkiOpieki: string = '',wiekPacjenta: string = '', wyksztalceniePacjent: string = '', zabiegPielegnacyjny: string = '',zapoznanieZKartka: string = '',
  zyczliwosc: string = '') {
    this.id = id;
    this.sygnaturaCzasowa = sygnaturaCzasowa;
    this.ankieteWypelniaCzasowa = ankieteWypelniaCzasowa;
    this.plecPacjenta = plecPacjenta;
    this.wiekPacjenta = wiekPacjenta;
    this.wyksztalceniePacjent = wyksztalceniePacjent;
    this.aktywnoscZawodowaPacjenta = aktywnoscZawodowaPacjenta;
    this.trybPrzyjecia = trybPrzyjecia;
    this.decyzjaLeczenia = decyzjaLeczenia;
    this.czasOczekiwania = czasOczekiwania;
    this.czasFormalnosci = czasFormalnosci;
    this.zyczliwosc = zyczliwosc;
    this.czy_zapoznano = czy_zapoznano;
    this.sugestie = sugestie;
    this.czystosc = czystosc;
    this.czasOczekiwaniaIp = czasOczekiwaniaIp;
    this.jakoscOpieki = jakoscOpieki;
    this.jakoscOpiekiPielegniarka = jakoscOpiekiPielegniarka;
    this.warunkiOpieki = warunkiOpieki;
    this.zapoznanieZKartka = zapoznanieZKartka;
    this.sugestieIp = sugestieIp;
    this.czyZna = czyZna;
    this.ocenaDostepnosc = ocenaDostepnosc;
    this.ocenaPrzekazaniaInformacji = ocenaPrzekazaniaInformacji;
    this.poszanowanieIntymnosci = poszanowanieIntymnosci;
    this.uwagi = uwagi;
    this.dostepnoscPielegniarek = dostepnoscPielegniarek;
    this.zabiegPielegnacyjny = zabiegPielegnacyjny;
  }
}

