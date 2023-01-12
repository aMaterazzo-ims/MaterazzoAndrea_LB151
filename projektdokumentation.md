# Projekt-Dokumentation

**Materazzo**

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|  12.01.2023     | 0.0.1   |  Ich habe die ersten fünf Punkte der Dokumentation ausgefüllt |
|       | 0.0.2   |                                                              |
|       | 0.0.3   |                                                              |
|       | 0.0.4   |                                                              |
|       | 0.0.5   |                                                              |
|       | 0.0.6   |                                                              |
|       | 1.0.0   |                                                              |

# 0 Ihr Projekt

✍️ Ein Glücksradsspiel, bei welchem Wörter oder Redewendungen in einem Gitter zu erraten sind.

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): Website des Spieles mit UI für Spieler*innen
* Tier 2 (Webserver): Eingbaben des Benutzers entgegenehmen und prüfen
* Tier 3 (Application Server):
* Tier 4 (Dataserver): Speichern von Benutzerdaten und deren Highscores

# 2 Technologie

* Tier 1 (Presentation): 
* Tier 2 (Webserver)
* Tier 3 (Application Server) 
* Tier 4 (Dataserver): FireBase

# 3 Datenbank

Daten sollen in meiner FireBase Datenbank gespeichert werden. Ich habe mehrheitlich mich mySQL gearbeitet und möchte nun etwas neues ausprobieren.

# 4.1 User Stories

✍️ Formulieren Sie klare Anforderungen in der Form von User Stories (*„als … möchte ich … damit …“*) und zu jeder Anforderung mindestens einen dazugehörigen Testfall (in Kapitel 4.2). 

✍️ Formulieren Sie weitere, eigene Anforderungen und Testfälle, wie Sie Ihre Applikation erweitern möchten. Geben Sie diesen statt einer Nummer einen Buchstaben (`A`, `B`, etc.)

| US-№ | Verbindlichkeit | Typ  | Beschreibung                         |
| ---| --------------- | ---- | ----------------------------------     |
| 1  | Muss      | Als Administrator möchte ich in der Lage sein, mich mit einem Admin Login anzumelden, damit nur ich Wörter und Benutzer bearbeiten kann     |                              
| 2  |    Muss      | Als Administrator möchte ich in der Lage sein, Wörter und Sätze zu erstellen und zu bearbeiten, damit das Spiel spannend bleibt und so denn Spieler freude bereitet.                         |
| 3  |    Muss      |Als Administrator möchte ich in der Lage sein, Kategorien anzulegen und jedes Wort bzw. jede Frage einer Kategorie zuordnen zu können, damit der Spieler eine Kategorie auwählen kann und so die von ihm gewünschten Wörter der Kategorie angezeigt gespielt werden können                   |                                    
| 4  |    Muss      |Als Administrator möchte ich in der Lage sein, Highscore-Listen-Einträge zu berarbeiten, damit ich Einträge die ich als missbräuclich sehe, entfernen kann|                                    |
| 5  |    Muss      |Als Kandidat*in* möchte ich auf einem Webserver zu spielen, damit ich mich auch von anderen Geräten anmelden kann und dort weiter spielen kann.     |                                    |
| 6  |    Muss      |Als Kandidat*in* möchte ich in der Lage sein, meinen Namen anzugeben, damit, falls ich einen Highscore erreiche, dort mein Name steht      |                                    |
| 7  |    Muss      |Als Kandidat*in* möchte ich in der Lage sein, mein Kontostand zu jeder Zeit sehen zu können, damit ich weiss wie viel Guthaben ich auf meine Spielkonto besitze.     |                                    |
| 8  |    Muss      |Als Kandidat*in* möchte ich in der Lage sein, meine Lebenspunkte zu jeder Zeit sehen zu können, damit ich weiss wie viel Leben ich noch habe.      |                                    |
| 9  |    Muss      |Als Kandidat*in* möchte ich wissen, ob meine gewählte Antwort oder richtig oder falsch war, damit ich aus meinen Fehlern lernen kann und die nächste Antwort sorgfältiger beantworten kann.      |                                    |
| 10 |    Muss      |Als Kandidat*in* möchte ich in der Lage sein, in der Highscore-Liste folgende Daten zu sehen : Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und anzahL Spielrunden, damit ich mich mit anderen vergleichen kann und wie viel bis zum nächsten Rang fehlt.     |                                    |
| 11 |    Muss      |Als Kandidat*in* möchte, dass die Highscore-Liste von Bester nach schlechtester sortiert ist, damit ich auf einen Blick sehe, welcher Spieler der beste ist ohne gross danach suchen zu müssen     |                                    |
| 12 |    Muss      | Als Kandidat*in* möchte ich das jedes Wort und jeder Satz mir nur genau ein Mal gestellt wird, damit das Spiel nicht langweilig wird      |                                    |
| 13 |    Muss      |Als Kandidat*in* möchte ich in der Lage sein, das Spiel zu jedem Zeitpunkt zu unterbrechen und will das mein Gewinn übernommen wird und ich falls nötig in die Highscore-Liste eingetragen werde.       |                                    |
| 14 |    Muss      |Als Kandidat*in* möchte ich, dass das Spiel mit genug Wörtern und Sätzen gespielt gefüllt wird, damit das Spiel nicht durchgespielt werden kann und so nicht langweilig wird.     |                                    |
| 15 |    Muss      |Als Kandidat*in* möchte ich, dass meine Spielrunden gezählt werden, damit ich weiss wie viele Runden ich schon gespielt habe und weiss wann die Zeit gekommen ist das Spiel zu schliessen und wieder zur Realität zurückzukehren.      |                                    |

✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc. oder Zahl), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). 

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |              |         |                   |
| ...  |              |         |                   |

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

# 5 Prototyp

✍️ Erstellen Sie Prototypen für das GUI (Admin-Interface und Quiz-Seite).

# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum | Beschreibung |
| ---------- | ----- | ------------ |
| ...        |       |              |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | ja / nein |                                           |
| ...  |           |                                           |

# 8 Testprotokoll

✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |       |          |        |
| ...  |       |          |        |

✍️ Vergessen Sie nicht, ein Fazit hinzuzufügen, welches das Test-Ergebnis einordnet.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [ ] Ich habe die Rechtschreibung überprüft
- [ ] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [ ] Ich habe alle mit ✍️ markierten Teile ersetzt
