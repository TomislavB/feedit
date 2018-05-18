# Feedit

Feedit je web aplikacija za unos, pregled i ocjenjivanje internet članaka.

## Upute za korištenje aplikacije

* Klonirajte ovaj repozitorij

```
 git clone https://github.com/TomislavB/feedit
```

* cd u direktorij gdje se nalazi Feedit

```
cd feedit
```

Ako nemate .env file, pošaljite mi email za pristup, a u suprotnom ga stavite u root direktorij.
Ukoliko nemate Node instaliran, instalirajte ga s [ovog linka](https://nodejs.org/en/download/.

* Instalirajte potrebne 'dependencies' uz pomoć npm-a

```
npm install
```

* Pokrenite npm

```
npm start
```

* Pokrenite server

```
nodemon server/server.js
```

## Mogućnosti

* Unos članaka koji sadrže: ID Internet članka tipa long, datum unosa, naslov članka, link na članak, imen autora, broj osvojenih glasova.
* Korisnik aplikacije može:
  * Vidjeti ekran s listom svih do sada unesenih članaka
  * Ukloniti članke
  * Pregledavati članke
  * Glasati za članke

## Korištenje aplikacijom

Korisnik dolazi na Home Page koji je zamišljen kao stranica s formom za Login korisnika.
Login Forma trenutno je postavljena samo na Frontendu i nema svoju funkcionalnost. Za registraciju i login korisnika potrebno mi je da naučim sessione, pa ću navedeno dodati do kraja tjedna novim commitovima na GitHub.

Na Home Pageu nalazi se navigacijska traka s linkom na popis svih članaka i linkom za unos novog članka.

Klikom na popis svih članaka dolazi se na stranicu koja sadrži dosad sve unesene članke. Oni se mogu brisati, ukloniti, pregledavati, kao i koristiti funkciju za glasanje.

Klikom na 'Add New Article' otvara se stranica za unos novog članka, gdje je potrebno ispuniti naslov članka, ime autora i link na članak. Klik na gumb Submit sprema članak u bazu i na popis svih članaka, a klikom na gumb Cancel poništava se unos.

## Development

### Frontend tehnologije

* React
* Reactstrap

### Backend tehnologije

* Node
* Express

### Baza podataka

* MongoDB
