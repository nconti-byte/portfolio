# Guida di Stile - Portfolio Desktop

Questo documento riassume la palette colori e i font utilizzati all'interno del progetto per garantire coerenza visiva in tutte le sezioni.

## 🎨 Palette Colori

| Colore | Variabile CSS | Codice HEX / RGBA | Utilizzo |
| :--- | :--- | :--- | :--- |
| **Antracite Scuro** | `--primary-color` | `#2d3436` | Testi principali, icone scure |
| **Blu Brillante** | `--secondary-color` | `#0984e3` | Pulsanti, link, elementi attivi |
| **Turchese** | `--accent-color` | `#00cec9` | Dettagli di accento |
| **Grigio Chiaro** | `--bg-color` | `#dfe6e9` | Sfondi secondari |
| **Bianco Puro** | `--white` | `#ffffff` | Sfondi finestre, testi su sfondi scuri |
| **Vetro (Glass)** | `--glass-bg` | `rgba(255, 255, 255, 0.2)` | Sfondo Dock e Top Bar |
| **Bordo Vetro** | `--glass-border` | `rgba(255, 255, 255, 0.3)` | Bordi elementi glassmorphism |
| **Ombra Finestra** | `--window-shadow` | `rgba(31, 38, 135, 0.37)` | Ombreggiatura per profondità |

### 🌙 Variabili Dark Mode
Quando la classe `.dark-mode` è attiva, le variabili cambiano come segue:
- `--primary-color`: `#f5f6fa` (Testo chiaro)
- `--bg-color`: `#1e272e` (Grigio scuro)
- `--white`: `#2d3436` (Antracite per sfondi finestre)
- `--glass-bg`: `rgba(0, 0, 0, 0.5)` (Vetro fumè)

---

## 🔡 Tipografia

Il sito utilizza due font principali caricati tramite Google Fonts:

### 1. Montserrat
Utilizzato principalmente per i titoli e le intestazioni (`h1`, `h2`, `h3`).
- **Pesi utilizzati:**
  - `400` (Regular): Utilizzo standard.
  - `700` (Bold): Titoli principali e sezioni in evidenza.

### 2. Open Sans
Utilizzato per il corpo del testo, le etichette delle icone e le interfacce di sistema.
- **Pesi utilizzati:**
  - `400` (Regular): Testi descrittivi e paragrafi.
  - `600` (Semi-Bold): Etichette icone, pulsanti e testi di interfaccia.

---

## ✨ Effetti Visivi
- **Glassmorphism:** Applicato a Top Bar, Dock e Finestre tramite `backdrop-filter: blur(15px)`.
- **Transizioni:** Tutte le interazioni (hover, apertura finestre) hanno una durata di `0.3s` con curva `ease` per un feeling fluido.
