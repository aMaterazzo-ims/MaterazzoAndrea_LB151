# Projekt-Dokumentation

**Materazzo**

| Datum | Version | Zusammenfassung                                              |
| ----- | ------- | ------------------------------------------------------------ |
|  12.01.2023     | 0.0.1   |  Ich habe die Punkte 1 bis 5 der Dokumentation ausgefüllt |
| 26.01.2023      | 0.0.2   |   Mock-Up fertiggestellt, Tracer Bullet erstellt                                                           |
|  05.02.2023     | 0.0.3   |  Prototypen erstellt, Technologien installiert                                                           |
|23.02.2023   | 0.0.4   |      Ich habe hauptsächlich programmiert Heute.                                                        |
| 07.03.2023     | 1.0.0 |   Programm fertig gemacht undDokumentation fertiggestellt.                                                           |

# 0 Ihr Projekt

✍️ Ein Glücksradsspiel, bei welchem Wörter oder Redewendungen in einem Gitter zu erraten sind.

# 1 Analyse

✍️ Beschreiben Sie, auf welchem Tier Sie die dynamischen Elemente der Anwendung unterbringen möchten:

* Tier 1 (Presentation): Website des Spieles mit UI für Spieler*innen
* Tier 2 (Webserver): Eingbaben des Benutzers entgegenehmen und prüfen
* Tier 3 (Application Server): Verbindung zur Datenbank
* Tier 4 (Dataserver): Speichern von Benutzerdaten und deren Highscores

# 2 Technologie

* Tier 1 (Presentation):HTML, CSS, JavaScript
* Tier 2 (Webserver): JavaScript
* Tier 3 (Application Server)JavaScript 
* Tier 4 (Dataserver): FireBase

# 3 Datenbank

Die Adminanmeldedaten sind auf FireBase gesepeichert. Die Authentifizierung erfolgt über FireBase. Die Wörter sind in der .js-Datei gespeichert. Ich habe mehrheitlich mit mySQL gearbeitet und wollte nun etwas neues ausprobieren.

# 4.1 User Stories

✍️ Formulieren Sie klare Anforderungen in der Form von User Stories (*„als … möchte ich … damit …“*) und zu jeder Anforderung mindestens einen dazugehörigen Testfall (in Kapitel 4.2). 

✍️ Formulieren Sie weitere, eigene Anforderungen und Testfälle, wie Sie Ihre Applikation erweitern möchten. Geben Sie diesen statt einer Nummer einen Buchstaben (`A`, `B`, etc.)

| US-№ | Verbindlichkeit | Typ  | Beschreibung                         |
| ---| --------------- | ---- | ----------------------------------     |
| 1  | Muss      |Funktional     |Als Administrator möchte ich in der Lage sein, mich mit einem Admin Login anzumelden, damit nur Daten bearbeiten könnte wenn ich wollen würde.|
| 2  |    Muss      |Funtional      |Als Administrator möchte ich in der Lage sein, Wörter und Sätze zu erstellen und zu bearbeiten, damit das Spiel spannend bleibt und so denn Spieler freude bereitet.|
| 3  |    Muss      |Funktional|Als Administrator möchte ich in der Lage sein, Kategorien anzulegen und jedes Wort bzw. jede Frage einer Kategorie zuordnen zu können, damit der Spieler eine Kategorie auwählen kann und so die von ihm gewünschten Wörter der Kategorie angezeigt gespielt werden können                                    |
| 4  |    Muss      |Funktional|Als Administrator möchte ich in der Lage sein, Highscore-Listen-Einträge zu berarbeiten, damit ich Einträge die ich als missbräuclich sehe, entfernen kann                                    |
| 5 |    Muss      |Funktional|Als Kandidat*in* möchte ich in der Lage sein, meinen Namen anzugeben, damit, falls ich einen Highscore erreiche, dort mein Name steht                                        |
| 6                                                            | Muss            | Funktional | Als Kandidat*in* möchte ich in der Lage sein das Spiel neuzustarten, sollte ich gewonnen oder verloren haben, damit ich die Möglichkeit habe eine weitere Runde zu spielen. |
| 7 |    Muss      |Funktional |Als Kandidat*in* möchte ich in der Lage sein, Buchstaben eingeben zu können, damit ich das Wort erraten kann.                                    |
| 8 |    Muss      |Funktional      |Als Kandidat*in* möchte ich wissen, ob meine gewählte Antwort oder richtig oder falsch war, damit ich aus meinen Fehlern lernen kann und die nächste Antwort sorgfältiger beantworten kann.                                    |
| 9 |    Muss      |Qualität     |Als Kandidat*in* möchte ich in der Lage sein, in der Highscore-Liste folgende Daten zu sehen : Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und anzahl Spielrunden, damit ich mich mit anderen vergleichen kann und wie viel bis zum nächsten Rang fehlt.                                    |
| 10 |    Muss      |Qualität     |Als Kandidat*in* möchte, dass ich das gesamte Wort eingeben kann, damit wenn ich denke das Wort zu wissen, das ganze Wort eingeben kann                                    |
| 11 |    Muss      |Qualität|Als Kandidat*in* möchte ich das jedes Wort und jeder Satz mir nur genau ein Mal gestellt wird, damit das Spiel nicht langweilig wird                                    |
| 12 |    Muss      |Funktional|Als Kandidat*in* möchte ich in der Lage sein, das Spiel zu jedem Zeitpunkt zu unterbrechen und will das mein Gewinn übernommen wird und ich falls nötig in die Highscore-Liste eingetragen werde.                                    |
| 13                                                           | Muss            | Funktional | Als Kandidat*in* möchte ich, dass das Spiel eine kurze Anleitung hat, damit ich weiss wie das Spiel funktioniert |
| 14 |    Muss      |Funktional      |Als Kandidat*in* möchte ich, dass meine Spielrunden gezählt werden, damit ich weiss wie viele Runden ich schon gespielt habe und weiss wann die Zeit gekommen ist das Spiel zu schliessen und wieder zur Realität zurückzukehren.                                    |
| 15                                                           | Muss            | Qualität   | Als  Kandidat*in* möchte ich, dass in irgendeiner Form angezeigt wird, wie viele Stellen ein Wort hat, damit es mir leichter fällt das Wort zu erraten. |
| A |    Muss      |Funktional      |Als ein Kandidat*in* möchte ich, den ersten Hinweis erhalten, damit ich Hilfe erhalte um das Wort zu erraten.  |
|B |    Muss      |Funktional      |Als ein Kandidat*in* möchte ich, den zweiten Hinweis erhalten, damit ich das Wort doch noch erraten kann.  |
|C |    Muss      |Funktional      |Als ein Kandidat*in* möchte ich, dass ich die Lösung anzeigen kann, damit ich weiss was das Wort war, sollte ich es nicht erraten haben.  |

✍️ Jede User Story hat eine ganzzahlige Nummer (1, 2, 3 etc. oder Zahl), eine Verbindlichkeit (Muss oder Kann?), und einen Typ (Funktional, Qualität, Rand). 

# 4.2 Testfälle

| TC-№ | Vorbereitung | Eingabe | Erwartete Ausgabe |
| ---- | ------------ | ------- | ----------------- |
| 1.1  |Website geöffnet, unangemeldet|1. Richitge Admin-Email und Passwort eingeben | Log-In wird gewährt|
| 2.1  |Website geöffnet, als Admin angemeldet|1. Auf "Wörter bearbeiten" drücken|Wörterliste erscheint und Wörter können bearbeitet werden und gelöscht werden|
| 3.1  |Website geöffnet, als Admin angemeldet|1. Auf "Wörter bearbeiten" drücken|Wörterliste erscheint und den Wörtern und Sätzen können Kategorien zugetielt werden                   |
| 3.2  |Website geöffnet, als Admin angemeldet|1. Auf "Kategorien erstellen" drücken|Kategorie kan erstellt werden und entweder neue Wörter oder bereits vorhandene Wörter können der Kategorie hinzugfügt werden|
| 4.1  |Website geöffnet, als Admin angemeldet|1. Highscore-Liste öffnen 2. Auf " Highscore-Liste bearbeiten" drücken| Einträge können bearbeitet oder gelöscht werden|
| 5.1  |Website geöffnet|1.Spiel starten|Feld erscheint, wo der Name eingegeben werden kann|
| 6.1  |Website geöffnet| 1. Spiel starten       2. Auf Neustarten drücken. |Spiel wird neugestartet|
| 7.1  |Website geöffnet, Spiel gestartet|1. Anzahl Striche und Hinweise anschauen. 2. "b" raten | Es wird "b" geraten und ein Strich wird durch ein b ersetzt. |
| 8.1  |Website geöffnet, Spiel gestartet|1. Anzahl Striche und Hinweise anschauen. 2. "ö" raten|Es wird ausgegeben das "ö" nicht in diesem Wort enthalten ist.                   |
| 9.1  |Website geöffnet, Highscore-Liste geöffnet| 1. Highscore-Liste anschauen                                 | Highscore-Liste mit folgenden Daten wird angezeigt: Rang, Name des Spielers, Zeitpunkt des Spiels, Geldbetrag und anzahl Spielrunden |
| 10.1  | Website geöffnet, Spiel gestartet                            | 1. Anzahl Striche und Hinweise anschauen. 2. "Bugatti" raten | Es wird ausgegeben ob Bugatti richtig oder falsch ist.       |
| 11.1  | Website geöffnet                                             | 1. Viele Runden werden gespielt / Code anschauen             | Kein Wort kam zwei Mal dran / Kein Wort ist doppelt eingetragen |
| 12.1  | Website geöffnet, Spiel läuft                                | 1. Spieler drückt auf Spiel beenden                          | Guthaben wird gespeichet und falls nötig, wird ein Eintrag in die Highscore-Liste getätigt |
| 13.1  |Website geöffnet|1. Website anschauen|Es wird in einem Satz erklärt wie das Spiel gespielt wird.|
| 14.1  | Website geöffnet, mehrere Runden schon gespielt              | 1.Spielseite anschauen                                       | Auf der Spielseite werden die Anzahl Runden angegeben        |
| 15.1  |Website geöffnet| 1.Spielseite starten |Die Striche representieren die Anzahl zu erratenden Buchstaben|
| A.1  |Website geöffnet,angemeldet als Spieler, Spiel gestartet| 1.Spielseite anschauen |Auf der Spielseite wird der erste Tipp angegeben|
| B.1  |Website geöffnet,angemeldet als Spieler, Spiel gestartet, mehreremale schon versucht das Wort zu erraten| 1.Spielseite anschauen |Auf der Spielseite wird der zweite Tipp angegeben|
| C.1  |Website geöffnet,angemeldet als Spieler, Spiel gestartet, 10 Mal versucht das Wort zu erraten| 1.Spielseite anschauen 2. Knopf "Lösung anzeigen drücken |Auf der Spielseite wird die Lösung gezeigt|

✍️ Die Nummer hat das Format `N.m`, wobei `N` die Nummer der User Story ist, die der Testfall abdeckt, und `m` von `1` an nach oben gezählt. Beispiel: Der dritte Testfall, der die zweite User Story abdeckt, hat also die Nummer `2.3`.

# 5 Prototyp

✍️ ![Mockup_151](https://user-images.githubusercontent.com/111268969/220881718-d4af6fc0-c8cb-413a-8145-e7c5e6270c2c.jpg)


# 6 Implementation

✍️ Halten Sie fest, wann Sie welche User Story bearbeitet haben

| User Story | Datum        | Beschreibung                                                 |
| ---------- | ------------ | ------------------------------------------------------------ |
| 1          | 27.02.2023   | Log-In erstellt, Authentifizierung via FireBase              |
| 2          | (27.02.2023) | Hat nicht funktioniert und wurde deshalb aus der Endversion gestrichen |
| 3          | (27.02.2023) | Hat nicht funktioniert und wurde deshalb aus der Endversion gestrichen |
| 4          | (27.02.2023) | Hat nicht funktioniert und wurde deshalb aus der Endversion gestrichen |
| 5          | (27.02.2023) | Hat nicht funktioniert und wurde deshalb aus der Endversion gestrichen |
| 6          | 27.03.2023   | Es existiert nun ein Knopf um das Spiel neuzustarten         |
| 7          | 27.03.2023   | User Inputs sind möglich und werden kontrolliert(z.B. Max. ein Buchstabe) |
| 8          | 27.03.2023   | Uberprüfung der Eingabe des Users nach der Richtigkeit       |
| 9          | (27.02.2023) | Hat nicht funktioniert und wurde deshalb aus der Endversion gestrichen |
| 10         | 27.02.2023   | Wörter implementiert                                         |
| 11         | 20.02.2023   | Wörter ausgewählt                                            |
| 12         | -            | Nicht erledigt                                               |
| 13         | 07.03.2023   | Kurzer Text geschrieben als Beschreibung                     |
| 14         | -            | Nicht erledigt                                               |
| 15         | 07.03.2023   | Bild gesucht, Hintergrund entfernt, 1 Bild pro Buchstabe implementiert |
| A          | 07.03.2023   | Hinweise zu den einzelnen Wörter geschrieben                 |
| B          | 07.03.2023   | 2. Hinweise zu den einzelnen Wörter geschrieben              |
| C          | 07.03.2023   | Option Lösung anzeigen                                       |

# 7 Projektdokumentation

| US-№ | Erledigt? | Entsprechende Code-Dateien oder Erklärung |
| ---- | --------- | ----------------------------------------- |
| 1    | Ja        | www.github.com/aMaterazzo-ims/MaterazzoAndrea_LB151/blob/main/login.html#L35-L40                                         |
| 2    | Nein      |    -                                       |
| 3    | Nein      |     -                                      |
| 4    | Nein      |   -                                         |
| 5    | Nein      |   -                                         |
| 6    | Ja        |   www.github.com/aMaterazzo-ims/MaterazzoAndrea_LB151/blob/main/index.html#L60                                         |
| 7    | Ja        |   www.github.com/aMaterazzo-ims/MaterazzoAndrea_LB151/blob/main/index.html#L43-L53                                       |
| 8    | Ja        |   www.github.com/aMaterazzo-ims/MaterazzoAndrea_LB151/blob/main/script.js#L117-L177                                         |
| 9    | Nein      |   -                                         |
| 10   | Ja        |www.github.com/aMaterazzo-ims/MaterazzoAndrea_LB151/blob/main/index.html#L50-L55                                          |
| 11   | Ja        | www.github.com/aMaterazzo-ims/MaterazzoAndrea_LB151/blob/main/login.html#L35-L40                                           |
| 12   | Nein      |                                            |
| 13   | Ja        |www.github.com/aMaterazzo-ims/MaterazzoAndrea_LB151/blob/main/script.js#L23-L38                                           |
| 14   | Nein      | -                                           |
| 15   | Ja        | Sieht man wenn man die Website anschaut und die Linien die Anzahl Buchstaben representieren                                          |
| A    | Ja        |www.github.com/aMaterazzo-ims/MaterazzoAndrea_LB151/blob/main/script.js#L44                                            |
| B    | Ja        | www.github.com/aMaterazzo-ims/MaterazzoAndrea_LB151/blob/main/script.js#L47                                          |
| C    | Ja        |www.github.com/aMaterazzo-ims/MaterazzoAndrea_LB151/blob/main/index.html#L57                                            |

# 8 Testprotokoll
https://youtu.be/FDaIQOakGUI
✍️ Fügen Sie hier den Link zu dem Video ein, welches den Testdurchlauf dokumentiert.

| TC-№ | Datum | Resultat | Tester |
| ---- | ----- | -------- | ------ |
| 1.1  |   07.03.2023    | OK |    Andrea Materazzo    |
| 2.1  |       07.03.2023  | NOK |  Andrea Materazzo        |
| 3.1  |       07.03.2023  | NOK |   Andrea Materazzo       |
| 4.1  |        07.03.2023 | NOK |   Andrea Materazzo       |
| 5.1  |       07.03.2023  | NOK |   Andrea Materazzo       |
| 6.1  |        07.03.2023 | OK |   Andrea Materazzo       |
| 7.1  |        07.03.2023 | OK |   Andrea Materazzo       |
| 8.1  |        07.03.2023 | OK |   Andrea Materazzo       |
| 9.1  |        07.03.2023 | NOK |   Andrea Materazzo       |
| 10.1  |        07.03.2023 | OK |    Andrea Materazzo      |
| 11.1  |        07.03.2023 | OK |    Andrea Materazzo      |
| 12.1  |        07.03.2023 | NOK |    Andrea Materazzo      |
| 13.1  |         07.03.2023| OK |    Andrea Materazzo      |
| 14.1  |        07.03.2023 | NOK |    Andrea Materazzo      |
| 15.1  |         07.03.2023| OK |     Andrea Materazzo     |
| A.1  |         07.03.2023| OK |     Andrea Materazzo     |
| B.1  |        07.03.2023 | OK |     Andrea Materazzo     |
| C.1  |        07.03.2023 | OK |    Andrea Materazzo      |

✍️ Ich habe anfangs das Projekt zu locker genommen und die ersten Wochen nichts ausser der Dokumentation gemacht. Aus diesem Grund konnte ich am Ende einige Features nicht implementieren da ich zu spät angefangen habe und die Zeit dann nicht mehr gereicht hat. Zu den Features Gehören die Funktion Vokal kaufen, Leben speichern, Anzahl Runden, das Punkte erhält, die Admin Page und die High-Score-Liste. Nächstes Mal muss ich umbedingt früeher damit anfangen.

# 9 `README.md`

✍️ Beschreiben Sie ausführlich in einer README.md, wie Ihre Applikation gestartet und ausgeführt wird. Legen Sie eine geeignete Möglichkeit (Skript, Export, …) bei, Ihre Datenbank wiederherzustellen.

# 10 Allgemeines

- [Erledigt] Ich habe die Rechtschreibung überprüft
- [Erledigt] Ich habe überprüft, dass die Nummerierung von Testfällen und User Stories übereinstimmen
- [Erledigt] Ich habe alle mit ✍️ markierten Teile ersetzt
