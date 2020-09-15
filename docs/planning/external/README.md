# External Project Planning

## Tickets

**Zuständig:** Projekt Management, Frontend, Backend

* Epic: Ein Modul in einem projekt
* Story: "Als [XYZ] möchte ich [ABC]." - 1 Vorgang
* Task: 1 Schritt eines Entwicklers

## Designs

**Zuständig:** Projekt Management, Design

* in Adobe XD erstellen
* Adobe XD Link(s) in Tickets/Story kopieren

## Texte / Übersetzungen

**Zuständig:** Projekt Management, Texter

* Texte müssen entweder im Ticket oder in Adobe XD Design oder als extra Textdatei definiert werden (kopierbar)

## Epic Planung

Findet nicht statt - Epics sind nur gruppierungen von Stories.

## Story Planung

### Anforderungen

**Zuständig:** Projekt Management, Frontend, Backend

* Kundenanforderungen liegen vor
* Ablauf/Userflow ist klar definiert
* Designs liegen vor - sofern nötig
* Texte/Übersetzungen liegen vor - sofern nötig

### Entwicklung

**Zuständig:** Frontend, Backend

* Schnittstelle(n) definieren
	* Endpoint (Method & URL - `Route::get(...)`) - Middlewares die fürs Frontend wichtig sind
	* Validierung
	* Response (Status & Body) - Erfolg & Spezialfehler (`abort_if()` ...)
* ggf. für eMails etc Frontend-URLs die das Backend wissen muss

### Frontend

**Zuständig:** Frontend

* Story-Design(s) in Vue-Komponenten zerlegen - für jede Komponente 1 Task-Ticket
* Datenaustausch zwischen den Komponenten - props, events, store, API-client
* Store mutators/accessors
* E2E testing

### Backend

**Zuständig:** Backend

* Datenbank-Struktur & Model inkl Relationen definieren - (Migration, Model)
* Factory Daten (sinnvolle Dummy-Daten erfinden - ggf Faker erweitern) - (Factory, ggf Seed)
* Special-Logic - (Klassen, Services, Packages, Flowchart ...)

## Branches

* pro Story (mit mehr als 2 Tasks) einen Story Branch anlegen `story/{ticket}-{title}` [Branches](/git/#branches)
* pro Task ein Branch sofern wärend der Planung nicht anders besprochen
