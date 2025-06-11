|[![VirusTotal HashForge+](https://img.shields.io/badge/HashForge%2B-VirusTotal-blue)](https://www.virustotal.com/gui/file/cb26a123af0c4e35f6789255f6d611f8c5abb6a418f984b0c83f6af89090f28d/detection)|[![VirusTotal HashForge+ Extended](https://img.shields.io/badge/HashForge%2B%20Extended-VirusTotal-green)](https://www.virustotal.com/gui/file/5ff588fb56d4986d7530e37e41bfead598dfbc80cdcc5f0cb84fc75932e87c3c?nocache=1)|[![VirusTotal HashForge+ Ultimate](https://img.shields.io/badge/HashForge%2B%20Ultimate-VirusTotal-purple)](https://www.virustotal.com/gui/file/3af0c34b66ee39f9796e9e669fd7a5edb5246a2dc5678811ece34030df505491?nocache=1)|
|---|---|---|

<br>

# 🔐 HashForge

**HashForge** ist ein leichtgewichtiges, browserbasiertes Tool zur Generierung von sicheren Passwörtern sowie zur Hash-Erzeugung mit klassischen Algorithmen wie SHA-1, SHA-256 und MD5.  
  - Die erste Version konzentriert sich auf **Benutzerfreundlichkeit**, **Klarheit**, **Performance** und ein **visuelles Neon-Design**.

<br>

|![v1](https://github.com/user-attachments/assets/8a13d590-dccb-48cc-a3c2-a3eb9fd38db4)|![v2](https://github.com/user-attachments/assets/7d2542c5-6118-4063-a5b7-d6c70da0421e)|![v3](https://github.com/user-attachments/assets/fd2e31c3-a4fc-4fb0-ba94-21ac6671de42)|
|---|---|---|

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
HashForge/
├── .github/workflows
│   └── HashForge.yml
│ 
├── Badges.md
├── LICENSE
├── README.md
├── index.html
├── package.json
├── script.js
└── style.css
```

<br>

---

<br>

🧠 Verwendete Technologien
   - Komponente Beschreibung
- HTML5	Semantische Strukturierung
- CSS3	Neon-Design, flexibles Layout
- JavaScript	Hauptlogik für Interaktion & Berechnung
- SparkMD5	Lightweight MD5-Library (CDN)
- WebCrypto API	Für SHA-1 & SHA-256

<br>

---

<br>

> 📦 Installation & Nutzung
  - 🔍 Voraussetzungen
  - Moderner Browser (Chrome, Firefox, Edge, Brave)

> Keine Serverinstallation nötig
  - 🧪 Lokale Ausführung

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

> 📌 Hinweis
  - Diese Version bildet die Basis für HashForge+ Extended und wird im Laufe der Entwicklung als Kernmodul weitergeführt.

<br>

---

<br>

> 🔍 Vergleich: HashForge V1 vs. V2 (Extended) vs. V3 (Ultimate)
  - Ein direkter Überblick über den Funktionsumfang, die Stärken und Schwächen sowie die technische Ausbaustufe der drei Entwicklungsphasen von **HashForge**.

<br>

---

<br>

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

<br>

---

<br>

### ✅ Vorteile & ❌ Nachteile

> 🔹 Version 1 – **HashForge**

**Pro:**
- Schneller Einstieg
- Minimaler Codeumfang
- Ideal für statische Nutzung

**Kontra:**
- Keine SHA3 / bcrypt Unterstützung
- Kein Salt-Management
- Keine Erweiterbarkeit ohne manuelle Anpassung

<br>

---

<br>

> 🔸 Version 2 – **HashForge+ Extended**

**Pro:**
- Volle Hash-Abdeckung (inkl. SHA3, bcrypt)
- Benutzerdefinierte Passwort-Optionen
- Modularer Aufbau & strukturiertes UI
- Salt-Generator & Auto-Salt

**Kontra:**
- Kein Export / Vergleich integriert
- Keine zentrale API-Schnittstelle
- Noch manuell testbar, keine Validierungslogik

<br>

---

<br>

> 🟢 Version 3 – **HashForge+ Ultimate**

**Pro:**
- Alle Features von V1 & V2
- Fortschrittliche Architektur (für API/DB/API Gateway vorbereitet)
- Visuelle Komponenten (Modal, Popup, dynamische Anzeige)
- Optional: Export, Vergleich, Analyse & UI-Dynamik

**Kontra:**
- Höherer Ressourcenverbrauch
- Komplexere Wartung / mehr Abhängigkeiten
- Finalisierung der API- und Exportkomponenten in Arbeit

<br>

---

<br>

> 🧭 Fazit

| Empfehlung | Zielgruppe |
|------------|------------|
| **V1**     | Schnell, lokal, technisch minimalistisch |
| **V2**     | Entwickler, Power-User, Webprojekte mit erweiterten Hashanforderungen |
| **V3**     | Profis, Plattform-Integration, API-ready Security Framework |

<br>

---

<br>

> 🔐 Hinweis zur Weiterentwicklung

> Version 3 (**HashForge+ Ultimate**) ist das primäre Zielsystem für produktive Nutzung mit allen Sicherheits- und Analysefeatures.  
- Es basiert auf den stabilen Modulen von V1 und V2.

<br>

---

<br>

🔐 Warum ist Version 3 ein Security Framework?

✅ 1. Modularität & Erweiterbarkeit
- Jedes Feature ist in sich gekapselt und erweiterbar (z. B. Hash-Module, Salt-Handler, UI-Komponenten)
- Ermöglicht die Integration in größere Systeme (z. B. Benutzerverwaltung, Authentifizierung, Pen-Testing-Tools)

---

✅ 2. Unterstützte Algorithmen & Sicherheitsschichten
- Breite Auswahl: SHA-1, SHA-2, SHA-3, MD5, bcrypt
- bcrypt mit konfigurierbarem Cost-Faktor → Passworthärtung
- 1Salt-Generierung (statisch + dynamisch)
- Vorbereitung auf künftige Module (z. B. scrypt, Argon2, PBKDF2 via WASM)

---

> ✅ 3. UI-Komponenten zur Sicherheitsbewertung
- Passwortgenerator mit kontrollierbarer Entropie
- Pop-up-System & Modals (später erweiterbar auf Warnungen, Richtlinienprüfungen)
- Status-Feedback und visuelle Kontrolle über den Hashprozess

---

> ✅ 4. Struktur für API & Export-Integration
- HashForge+ Ultimate ist von Anfang an darauf ausgelegt, als Kernmodul in eine größere Sicherheitsplattform eingebettet zu werden

> Ideal für:
- REST-API-Gateways
- Secure Token Generation
- Hashverifikation in Login-Systemen
- Audit-Log-Funktionalität

---

> 📦 Zusammenfassung
- Kriterium	HashForge+ Ultimate
- Architektur	Modular
- Sicherheit	Hashing + Salt + Cost-Faktor
- Erweiterbarkeit	Hoch
- Einsatzbereich	Standalone & Integration
- Framework-Niveau ✅ Ja

<br>

---

<br>

© 2025 Thorsten Bylicki | BYLICKILABS  
MIT [LICENSE](LICENSE)  | Status: In aktiver Weiterentwicklung

---
