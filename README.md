# 2023204769 Online salter bioskopa

Ovaj repozitorijum poseduje izvorni kod za aplikaciju online salter bioskopa kao projekat iz predmet Programiranje korisnickih interfejsa

# Tehnologije

Aplikacija je razvijena upotrebom frontend ookruzenja Angular 18. Pored toga koriscene su sledece biblioteke:

- [Angular Material](https://material.angular.io)
- [Sweet Alert 2](https://sweetalert2.github.io)


# Struktura aplikacije

Izvorni kod aplikacije koristi standardnu strukturu Angular projekta bez `app.modules.ts` datoteke koja nije potrebna upravo verzije 18. Svi potrebni moduli se uvoze direktno u komponentama koje ih koriste.

Prikaz svih direktorijuma:


- `src/app` - Glavni direktorijum koji sadrzi sve komponente
- `src/models` - Direktorijum u kom skladistimo definicije tipova/interfejsa potrebnih za brzi razvoj aplikacije
- `src/services` - Direktorijum koji sadrzi definicije servisa neophodnih za rad aplikacije



# Dodatne informacije

Aplikacija koristi Angular Router koji zahteva da prilikom pustanja aplikacije u produkciju svaka putanja redirektovana na index.html datoteku jer su rute definisane programski u javscript-u a ne fizicki postavljanjem fajlova.
