# 🔐 HashForge

**HashForge** ist ein leichtgewichtiges, browserbasiertes Tool zur Generierung von sicheren Passwörtern sowie zur Hash-Erzeugung mit klassischen Algorithmen wie SHA-1, SHA-256 und MD5.  
Die erste Version konzentriert sich auf **Benutzerfreundlichkeit**, **Klarheit**, **Performance** und ein **visuelles Neon-Design**.

<br>

---

<br>

## 🚀 Funktionen

- 🎲 Zufällige Passwortgenerierung (mit Längenwahl)
- 🔐 Unterstützung für:
  - SHA-1
  - SHA-256
  - MD5 (über SparkMD5)
- 📋 Kopierfunktion für Passwörter und Hashes
- 🌐 Vollständig offline im Browser nutzbar
- 💡 Klare, reaktionsschnelle Benutzeroberfläche mit Neon-Stil
- 🧩 Modularer Aufbau für einfache Erweiterbarkeit

<br>

---

<br>

## 📁 Projektstruktur

```yarn
HashForge
├── index.html
├── style.css
├── script.js
└── README.md
```

<br>

---

<br>

🧠 Verwendete Technologien
> omponente Beschreibung
- HTML5	Semantische Strukturierung
- CSS3	Neon-Design, flexibles Layout
- JavaScript	Hauptlogik für Interaktion & Berechnung
- SparkMD5	Lightweight MD5-Library (CDN)
- WebCrypto API	Für SHA-1 & SHA-256

<br>

---

<br>

📦 Installation & Nutzung
    - 🔍 Voraussetzungen
    - Moderner Browser (Chrome, Firefox, Edge, Brave)

> Keine Serverinstallation nötig
> 🧪 Lokale Ausführung

<br>

---

<br>

> 🛠 Erweiterungsmöglichkeiten
  - Idee Beschreibung
- 🔄 Salt-Handling	Optionale Salt-Eingabe zur Hash-Manipulation
- 🔢 SHA-512	Unterstützung für größere Hash-Ausgaben
- 🔒 Passwortstärkenanzeige	Analyse & Bewertung generierter Passwörter
- ☁️ Exportfunktion	Ausgabe als CSV oder JSON

<br>

---

<br>

📌 Hinweis
> Diese Version bildet die Basis für HashForge+ Extended und wird im Laufe der Entwicklung als Kernmodul weitergeführt.

<br>

---

<br>

#### 🔍 Vergleich: HashForge V1 vs. V2 (Extended) vs. V3 (Ultimate)

Ein direkter Überblick über den Funktionsumfang, die Stärken und Schwächen sowie die technische Ausbaustufe der drei Entwicklungsphasen von **HashForge**.

---

## 📊 Funktionsmatrix

| Funktion                          | HashForge | HashForge+ Extended | HashForge+ Ultimate |
|----------------------------------|---------------|--------------------------|--------------------------|
| Passwortgenerator                | ✅ Einfach     | ✅ Erweiterbar           | ✅ Dynamisch & konfigurierbar |
| Hash-Funktionen SHA-1, SHA-256   | ✅ Ja          | ✅ Ja                     | ✅ Ja                     |
| SHA-384 / SHA-512                | ❌ Nein        | ✅ Ja                     | ✅ Ja                     |
| SHA3-224/256/384/512             | ❌ Nein        | ✅ Ja                     | ✅ Ja                     |
| MD5                              | ✅ Ja (extern) | ✅ Ja (extern)            | ✅ Ja (extern)            |
| bcrypt (inkl. Cost-Faktor)       | ❌ Nein        | ✅ Ja                     | ✅ Ja (erweiterbar)       |
| Salt manuell / automatisch       | ❌ Nur manuell | ✅ Beides                 | ✅ In Hashfluss integriert |
| Neon UI                          | ✅ Ja          | ✅ Ja                     | ✅ Ja                     |
| Benutzerführung (Responsive)     | ✅ Grundlegend | ✅ Optimiert              | ✅ Adaptive Oberfläche    |
| Modularer Codeaufbau             | ❌ Minimal     | ✅ Modular                | ✅ Architekturiert        |
| API-Vorbereitung / Export        | ❌ Nein        | ❌ Noch nicht             | ✅ Geplant / vorbereitet  |

---

### ✅ Vorteile & ❌ Nachteile

### 🔹 Version 1 – **HashForge**

**Pro:**
- Schneller Einstieg
- Minimaler Codeumfang
- Ideal für statische Nutzung

**Kontra:**
- Keine SHA3 / bcrypt Unterstützung
- Kein Salt-Management
- Keine Erweiterbarkeit ohne manuelle Anpassung

---

### 🔸 Version 2 – **HashForge+ Extended**

**Pro:**
- Volle Hash-Abdeckung (inkl. SHA3, bcrypt)
- Benutzerdefinierte Passwort-Optionen
- Modularer Aufbau & strukturiertes UI
- Salt-Generator & Auto-Salt

**Kontra:**
- Kein Export / Vergleich integriert
- Keine zentrale API-Schnittstelle
- Noch manuell testbar, keine Validierungslogik

---

### 🟢 Version 3 – **HashForge+ Ultimate**

**Pro:**
- Alle Features von V1 & V2
- Fortschrittliche Architektur (für API/DB/API Gateway vorbereitet)
- Visuelle Komponenten (Modal, Popup, dynamische Anzeige)
- Optional: Export, Vergleich, Analyse & UI-Dynamik

**Kontra:**
- Höherer Ressourcenverbrauch
- Komplexere Wartung / mehr Abhängigkeiten
- Finalisierung der API- und Exportkomponenten in Arbeit

---

## 🧭 Fazit

| Empfehlung | Zielgruppe |
|------------|------------|
| **V1**     | Schnell, lokal, technisch minimalistisch |
| **V2**     | Entwickler, Power-User, Webprojekte mit erweiterten Hashanforderungen |
| **V3**     | Profis, Plattform-Integration, API-ready Security Framework |

---

### 🔐 Hinweis zur Weiterentwicklung

> Version 3 (**HashForge+ Ultimate**) ist das primäre Zielsystem für produktive Nutzung mit allen Sicherheits- und Analysefeatures.  
- Es basiert auf den stabilen Modulen von V1 und V2.

---

© 2025 Thorsten Bylicki | BYLICKILABS  
Lizenz: MIT | Status: In aktiver Weiterentwicklung

---

