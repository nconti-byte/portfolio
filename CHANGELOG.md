# Changelog

Tutte le modifiche e gli aggiornamenti apportati al progetto Portfolio saranno documentati in questo file.

## [2026-05-21]

### 19:58
- **Inizializzazione Progetto**: Creata la struttura delle cartelle (`css/`, `img/`, `js/`) e i file di base (`index.html`, `bio.html`, `portfolio.html`, ecc.).
- **Documentazione**: Popolato il file `README.md` con l'obiettivo del progetto, lo stack tecnologico, la palette colori e la struttura delle pagine.

### 20:04
- **Interfaccia Web Desktop**: Implementato il layout principale che simula un desktop di un sistema operativo.
- **Componenti Desktop**: Aggiunte icone interattive, una taskbar con orologio funzionante e un pulsante "Start".
- **Sistema a Finestre**: Implementata la logica per aprire, chiudere e trascinare le finestre (Progetti e Contatti) con effetto glassmorphism.

### 20:07
- **Icone PDF**: Trasformati i link "Chi Sono" e "Portfolio Full" in icone stile PDF direttamente sul desktop.
- **Organizzazione Progetti**: Verificata la cartella "Progetti" contenente i link ai tre lavori principali.
- **Stile**: Aggiunti stili specifici per le icone PDF e i contatti social (Instagram, Gmail, WhatsApp).

### 20:29
- **Personalizzazione Icone Cartelle**: Sostituite le icone vettoriali delle cartelle con l'immagine personalizzata `img_cartella.png` sia sul desktop che nelle intestazioni delle finestre.

### 23:30
- **Personalizzazione Icone PDF**: Sostituite le icone vettoriali dei file PDF con l'immagine personalizzata `icona_pdf.png`.
- **Ottimizzazione Visiva**: Aggiunti effetti di transizione e scaling sulle nuove icone per migliorare l'interattività.

### 23:37
- **Aggiornamento Changelog**: Inizializzato e popolato il file `CHANGELOG.md` con lo storico di tutte le attività svolte finora.

### 23:43
- **Refactoring CSS**: Creato il file `css/pages.css` per gestire lo stile comune di tutte le pagine secondarie.
- **Pulizia HTML**: Rimosse le dichiarazioni `<style>` interne da `bio.html`, `portfolio.html` e inizializzati i file dei lavori (`lavoro-1.html`, ecc.) con il nuovo link al CSS esterno.

## [2026-05-25]

### 16:31
- **Separazione CSS per Pagina**: Implementata una struttura CSS 1:1 con le pagine HTML. Ogni pagina ora ha il proprio file CSS dedicato (`index.css`, `bio.css`, `portfolio.css`, ecc.) per una manutenzione più semplice e indipendente.
- **Indipendenza Stilistica**: Ogni file CSS include ora le proprie variabili e reset, eliminando la dipendenza da file comuni e permettendo modifiche isolate a singole pagine.
- **Pulizia**: Rimossi i file obsoleti `style.css` e `pages.css`.

## [2026-06-09]

### 21:11
- **Visualizzazione PDF in Finestra**: Implementata l'apertura dei file "Bio.pdf" e "Portfolio.pdf" in una finestra dedicata invece che a tutto schermo.
- **Interfaccia Documenti**: Aggiunto un pulsante di chiusura (X) nell'angolo in alto a sinistra della finestra del documento, simulando un vero visualizzatore PDF.
- **Integrazione Progetti**: Estesa la visualizzazione in finestra anche ai tre progetti contenuti nella cartella "Progetti", sostituendo le icone vettoriali con l'icona PDF personalizzata.
- **Esperienza Utente**: Rimossa la freccia "Torna al Desktop" dalle pagine interne (`bio.html`, `portfolio.html`, `lavoro-1.html`, ecc.) per una navigazione più fluida all'interno dell'ambiente desktop.
- **Layout e Stile**: Centrata la finestra PDF sullo schermo con dimensioni ottimizzate per mantenere visibile lo sfondo del desktop.

### 21:58
- **Sistema Dock (Stile macOS)**: Implementata una barra Dock in basso allo schermo per gestire le finestre ridotte a icona.
- **Funzionalità Riduci a Icona**: Aggiunto il tasto "Riduci a icona" (-) a tutte le finestre (Cartelle e PDF).
- **Logica di Ripristino**: Le finestre ridotte possono essere ripristinate cliccando sull'icona nel Dock o cliccando nuovamente sull'icona originale sul desktop/cartella.
- **Design Dock**: Il Dock è un rettangolo semitrasparente con bordi argento marcati, effetto blur e angoli arrotondati (25px).
- **Icone Dinamiche**: Il Dock mostra l'icona corretta (PDF o Cartella) a seconda del tipo di finestra minimizzata.
- **Ottimizzazione Interazione**: Migliorata la gestione dello z-index e del trascinamento per evitare conflitti con i controlli delle finestre.

### 22:05
- **Supporto Multi-Finestra**: Implementata la possibilità di aprire più documenti PDF contemporaneamente. Ogni documento viene ora gestito come un'istanza separata.
- **Etichette nel Dock**: Le icone nel Dock includono ora il nome del file o della cartella corrispondente per una facile identificazione.
- **Gestione Istante**: Se un file è già aperto (anche se minimizzato), cliccando sulla sua icona originale verrà riportato in primo piano invece di aprire un duplicato.
- **Stile Dock Avanzato**: Ottimizzato il layout del Dock per ospitare le etichette di testo con effetti di ombreggiatura e troncamento per nomi lunghi.

### 22:13
- **Slideshow Sfondo Dinamico**: Implementato un sistema di rotazione automatica dello sfondo con 10 immagini naturalistiche ad alta risoluzione.
- **Transizione Cross-Fade**: Aggiunta un'animazione fluida di dissolvenza incrociata (2 secondi) tra un'immagine e l'altra per un effetto visivo leggero e piacevole.
- **Ottimizzazione Performance**: Inserito il precaricamento delle immagini per garantire transizioni senza scatti o caricamenti visibili.
- **Ciclo Continuo**: Lo slideshow è configurato per ruotare ogni 10 secondi e ricominciare automaticamente dopo l'ultima immagine.

### 22:46
- **Barra Superiore (Top Bar)**: Aggiunta una barra di sistema nella parte alta dello schermo con stile glassmorphism (semi-trasparente, blur e bordo argento).
- **Branding**: Inserito il logo personalizzato (`negativo.png`) nella parte sinistra della barra superiore.
- **Orologio e Data Dinamici**: Implementato un sistema di data e ora in tempo reale nella parte destra della barra superiore, includendo giorno della settimana, numero del giorno e mese in italiano.
- **Layout Desktop**: Ottimizzato lo spazio di lavoro per integrare la nuova barra superiore senza sovrapposizioni con le icone del desktop.

### 23:10
- **Correzione Sfondi**: Sostituita un'immagine dello slideshow che risultava compromessa (schermata nera) con una nuova immagine naturalistica.
- **Branding**: Aumentate le dimensioni del logo nella barra superiore per una migliore visibilità.

### 23:18
- **Ottimizzazione Sfondi**: Sostituite la 4ª e la 5ª immagine dello slideshow per risolvere il problema dell'oscuramento totale durante la transizione.
- **Miglioramento Transizioni**: Aggiornata la logica di caricamento delle immagini per pre-caricare lo sfondo successivo sul livello nascosto prima dell'inizio della dissolvenza, eliminando eventuali flash neri.

### 23:12
- **Ottimizzazione Barra Superiore**: Aumentata l'altezza della barra superiore a 45px e aggiunto uno spazio di 10-15px intorno al logo per un design più arioso e pulito.
- **Layout Desktop**: Aggiornato il padding superiore del contenitore desktop per adattarsi alla nuova altezza della barra di sistema.

## [2026-06-10]

### 10:48
- **Menu Barra Superiore**: Aggiunti i pulsanti "Ridimensiona", "Appunti", "Tutorial" e "Account" nella barra superiore.
- **Funzionalità Ridimensiona**: Implementata la finestra "Ridimensiona Icone" che permette di cambiare dinamicamente la grandezza delle icone del desktop tramite uno slider.
- **Layout Adattivo**: Le icone del desktop si riposizionano automaticamente quando vengono ridimensionate per evitare sovrapposizioni, mantenendo una griglia ordinata.
- **Design Coerente**: La nuova finestra segue lo stile glassmorphism del sistema e i pulsanti del menu hanno effetti di hover per una migliore interattività.

### 11:05
- **Miglioramento Dock**: La finestra "Ridimensiona" e la nuova finestra "Account" ora mostrano le proprie icone specifiche (Lucide Icons) nel Dock invece dell'icona generica della cartella.
- **Tutorial Interattivo**: Implementato il pulsante "Tutorial" che apre un documento PDF-style (`tutorial.html`) con le istruzioni dettagliate sull'uso del sito.
- **Sistema Account e Persistenza**: Creata la gestione account con email e password. Le impostazioni (come la dimensione delle icone) vengono ora salvate nel LocalStorage e ripristinate automaticamente al login.
- **Documentazione Tecnica**: Creata la cartella `lavoro/` contenente il file `spiegazione_funzionamento.txt` con una spiegazione tecnica approfondita di tutte le logiche del sito (finestre, docking, slideshow, account, ecc.).
- **UI Account**: Aggiunta una finestra dedicata per il login/registrazione e la gestione del profilo utente.

### 11:16
- **Fix Tutorial**: Corretto il collegamento del pulsante "Tutorial" nella barra superiore per permettere l'apertura corretta della guida in una finestra PDF.

### 11:26
- **Ottimizzazione Finestre PDF**: Regolata la larghezza delle finestre PDF a 650px per ottenere una forma rettangolare più simile a un documento reale.
- **Widget Appunti Persistente**: Aggiunto un riquadro per gli appunti fisso sul lato destro del desktop che non può essere chiuso.
- **Gestione Pagine Appunti**: Implementato un menu a discesa sotto il tasto "Appunti" che permette di aggiungere nuove pagine e passare da una all'altra.
- **Ridimensionamento Reattivo**: Il widget degli appunti e il suo testo si ridimensionano ora proporzionalmente insieme alle icone del desktop tramite la funzione "Ridimensiona".
- **Persistenza Dati Avanzata**: Integrata la gestione degli appunti nel sistema Account. Se l'utente crea appunti prima di loggarsi, questi vengono migrati automaticamente nel nuovo account al momento della creazione/accesso.

### 17:13
- **Fix Burger Menu**: Risolto un problema che impediva l'apertura del menu burger su dispositivi mobile. Ottimizzato il posizionamento assoluto, lo z-index e la gestione degli eventi di click per garantire una risposta immediata al tocco.

### 17:56
- **Ottimizzazione Posizionamento Finestre PDF**: Regolato il posizionamento iniziale e l'altezza delle finestre PDF per evitare che si sovrappongano alla barra superiore o al Dock in basso. Ora le finestre mantengono un margine di sicurezza di circa 20px da entrambi i bordi.

### 18:07
- **Blocco Trascinamento Finestre**: Implementata una logica di contenimento per il trascinamento delle finestre. Ora non è più possibile spostare una finestra completamente fuori dallo schermo; almeno la metà della sua superficie rimarrà sempre visibile e raggiungibile, evitando che l'utente perda il controllo degli elementi aperti.

### 19:11
- **Navigazione Mobile (Stile Android)**: Introdotta una barra di navigazione mobile per schermi <= 768px. Il Dock viene nascosto per lasciare spazio a tre tasti funzione: Recenti (tre linee), Home (quadrato arrotondato) e Indietro (simbolo minore).
- **Logica di Sistema Mobile**: Implementata la funzionalità per il tasto Home (chiusura di tutte le finestre) e il tasto Indietro (chiusura della finestra attiva in primo piano).

### 19:30
- **Esperienza Mobile Avanzata**: Ottimizzata la gestione dei PDF e delle cartelle per schermi <= 768px.
- **Task Switcher**: Implementato un sistema di gestione delle app aperte (accessibile tramite il primo tasto mobile) che permette di visualizzare e ripristinare tutte le finestre e i PDF aperti senza chiuderli.
- **Navigazione Intelligente**: Il tasto "Indietro" ora riconosce il contesto: se cliccato in un PDF aperto da una cartella, torna alla cartella; se cliccato in una cartella, torna al desktop.
- **Layout Full-Screen**: I PDF su mobile occupano ora tutto lo spazio tra la barra superiore e quella inferiore, con la rimozione delle icone di intestazione e del tasto di chiusura manuale.
- **Interazione Desktop**: Aggiunta la possibilità di chiudere le cartelle cliccando semplicemente sullo sfondo del desktop (solo su mobile).

### 19:34
- **Chiusura App via Swipe (Mobile)**: Aggiunta la possibilità di chiudere le app nel Task Switcher trascinandole verso l'alto (swipe up), simulando il comportamento dei moderni smartphone.
- **Pulizia UI Mobile**: Rimosso il tasto "Riduci a icona" (-) dalle intestazioni delle finestre su mobile, forzando l'uso della navigazione di sistema Android-style per un'esperienza più coerente.

## [2026-06-20]

### 10:53
- **Riprogettazione Task Switcher (Mobile)**: Completamente rinnovata l'interfaccia delle app aperte su mobile. Ora le schede sono disposte orizzontalmente con scorrimento fluido e snap al centro.
- **Nuovo Layout Schede**: Ogni scheda nel Task Switcher mostra ora l'icona e il nome centrati in alto, seguiti da un'area rettangolare di anteprima che occupa lo spazio rimanente.
- **Interazione Swipe Migliorata**: Ottimizzata la meccanica di chiusura tramite trascinamento verso l'alto, rendendola più fluida e naturale.
- **Design Immersivo**: Aumentata la dimensione delle schede (80vw x 70vh) per una migliore visibilità e facilità di interazione su dispositivi touch.

### 20:40
- **Ottimizzazione Sensibilità Swipe (Mobile)**: Aumentata notevolmente la sensibilità del gesto di chiusura nel Task Switcher. Ora basta un minimo movimento verso l'alto (30px) per attivare la chiusura automatica della scheda, rendendo l'eliminazione delle app aperte molto più rapida e senza sforzo.

### 20:42
- **Fix Chiusura App (Mobile)**: Risolto un bug nel Task Switcher dove le schede tornavano nella posizione originale invece di chiudersi dopo lo swipe. Introdotto uno stato di "app-killed" per garantire che le finestre chiuse via swipe vengano rimosse correttamente dalla memoria e dall'elenco delle attività aperte.

### 20:44
- **Fix Allineamento Menu Burger**: Corretto un problema di spaziatura nel menu mobile dove la voce "Appunti" risultava disallineata rispetto alle altre a causa di un doppio padding nel wrapper del menu a discesa.

### 20:54
- **Widget Appunti Responsive**: Ottimizzata la dimensione del widget degli appunti per schermi piccoli (Mobile S, M, L). Il widget ora si restringe progressivamente a partire dai 500px di larghezza schermo, evitando di coprire le icone del desktop sulla sinistra e garantendo una visibilità ottimale anche su dispositivi da 320px.

### 21:15
- **Ripristino Header Appunti (Mobile)**: Ripristinato il numero della pagina nell'intestazione del widget appunti su mobile, ottimizzando il font e la spaziatura per garantire la chiarezza senza compromettere il layout.
- **Miglioramento Menu Appunti (Burger Menu)**: Modificata la logica di chiusura del menu burger su mobile; ora cliccando su "Appunti" il menu principale rimane aperto per permettere la selezione delle pagine o l'aggiunta di nuove. Il menu si chiude automaticamente solo dopo aver completato un'azione (cambio pagina o aggiunta).
- **Eliminazione Pagine Appunti**: Aggiunta un'icona a forma di cestino accanto a ogni pagina nel menu a discesa degli appunti, permettendo l'eliminazione delle pagine non più necessarie (sia su desktop che su mobile). Implementata la logica di sicurezza per impedire l'eliminazione dell'ultima pagina rimanente.

### 21:18
- **Correzione Layout Header Appunti (Mobile)**: Ottimizzato il layout per schermi M/S. L'icona rimane affiancata alla parola "Appunti", mentre il numero della pagina è stato spostato su una nuova riga senza il simbolo "-".

### 21:22
- **Ottimizzazione Icone Screen S (Mobile)**: Affinato il layout per schermi S (<= 320px). Trovata una via di mezzo per la dimensione delle icone (85px) e del testo (0.75rem). Allineata perfettamente la parte superiore delle icone con il widget degli appunti (padding-top: 70px) per compensare il padding interno degli elementi.

### 11:55 (21/06/2026)
- **Overlay Iniziali**: Implementati due overlay sequenziali all'apertura del sito: Informativa Cookie e Creazione Account.
- **Informativa Cookie**: Richiesta obbligatoria di accettazione cookie al primo accesso. Per gli utenti non loggati, la richiesta viene riproposta ad ogni refresh della pagina.
- **Overlay Account**: Schermata di login/registrazione iniziale per incoraggiare la persistenza dei dati, con opzione "Continua senza account" per l'accesso guest.
- **Refactoring Logica Account**: Centralizzata la logica di login in una funzione riutilizzabile per supportare sia l'overlay iniziale che la finestra account standard.

### 12:18 (21/06/2026)
- **Personalizzazione Icone Social**: Sostituite le icone vettoriali di Instagram e WhatsApp con immagini personalizzate (`instagram.png` e `whatsapp.png`) dalla cartella `img/`.
- **Ottimizzazione Visiva**: Uniformato lo stile e il ridimensionamento delle nuove icone social con il resto degli elementi del desktop.

### 16:15 (27/06/2026)
- **Aggiornamento Progetti**: Completate le pagine dei tre lavori principali.
- **Lavoro1**: Inserita l'immagine `alfabeto.png` ridimensionata per visibilità immediata.
- **Lavoro2**: Inserita l'immagine `brief2.png` ridimensionata (75%) per una visione completa senza scorrimento.
- **Lavoro3**: Inserita l'immagine `cartolina.png` (sostituendo il file PDF precedente) per garantire una visualizzazione uniforme e priva di scorrimenti interni, allineata allo stile degli altri progetti.
- **Uniformità**: Aggiornati i titoli in "Lavoro1", "Lavoro2" e "Lavoro3" per coerenza visiva.

### 17:22 (27/06/2026)
- **Aggiornamento Portfolio**: Popolata la pagina `portfolio.html` con diverse sezioni tematiche (Manifesti, Manifesti tipografici, Cartoline, Poster, Descrivi parole, Album).
- **Layout Griglia**: Implementata una griglia a 3 colonne per tutte le sezioni, garantendo una visualizzazione organizzata e professionale delle immagini.
- **Sezione Album**: Inserite 6 immagini organizzate in una griglia 2x3.
- **Ottimizzazione Visiva**: Aggiunti effetti di hover sulle immagini e descrizioni per ogni categoria di lavoro.

### 17:42 (27/06/2026)
- **Documentazione di Stile**: Creato il file `STYLE_GUIDE.md` contenente la palette colori ufficiale e i font utilizzati con i relativi pesi per riferimento futuro.

### 20:25 (27/06/2026)
- **Fix Navigazione Mobile**: Risolto un problema nel Task Switcher su mobile dove la barra di navigazione inferiore spariva o diventava inutilizzabile.
- **Z-Index e Layering**: Aumentato lo z-index della barra di navigazione mobile (`.mobile-nav`) a 2500 per garantire che rimanga sempre sopra il Task Switcher e altri overlay.
- **Posizionamento Task Switcher**: Sostituita l'altezza calcolata con un posizionamento `bottom: 50px` per il Task Switcher, garantendo che non si sovrapponga mai alla barra di navigazione, indipendentemente dalle variazioni dell'altezza del viewport su browser mobile (es. comparsa/scomparsa barra degli indirizzi).
- **Git**: Iniziato il tracciamento delle modifiche tramite commit Git dettagliati per ogni aggiornamento.

### 21:55 (27/06/2026)
- **Ottimizzazione Layout Mobile (Safe Area)**: Risolti problemi di visibilità degli elementi su schermi piccoli e corti.
- **Overlay Responsive**: Modificata la logica degli overlay (Cookie e Account) su mobile: ora terminano esattamente sopra la barra di navigazione (`bottom: 50px`), garantendo che i pulsanti inferiori (es. "Continua senza account") siano sempre visibili e cliccabili.
- **Fix Scrolling**: Aumentato il padding inferiore (`padding-bottom: 100px`) in tutte le pagine interne (Bio, Portfolio, Progetti) e nelle finestre di sistema su mobile. Questo assicura che l'ultima riga di testo o l'ultimo elemento di una pagina scrollabile rimangano sempre al di sopra della barra di navigazione mobile.
- **Finestre PDF Mobile**: Aggiornato il posizionamento delle finestre PDF su mobile utilizzando `bottom: 50px` invece di un'altezza fissa, migliorando la compatibilità con diversi rapporti d'aspetto.

### 09:40 (01/07/2026)
- **Implementazione Dark Mode**: Aggiunta la modalità scura completa al sistema.
- **Rilevamento Automatico**: Il sito rileva ora automaticamente la preferenza del sistema operativo dell'utente (chiaro/scuro) tramite query media CSS.
- **Controllo Manuale**: Inserito un tasto "Luna/Sole" nella barra superiore (a destra, accanto alla data) per permettere il cambio manuale del tema.
- **Persistenza Tema**: La scelta dell'utente viene salvata nel `localStorage` per essere mantenuta alle visite successive.
- **Sincronizzazione Iframe**: Implementata una logica JavaScript per propagare automaticamente il cambio di tema a tutti i documenti PDF (iframe) aperti, garantendo una coerenza visiva totale.
- **Design Scuro (Dark Glass)**: Creato un set di variabili CSS specifico per la Dark Mode che scurisce le finestre, inverte i colori del testo e rende l'effetto glassmorphism più profondo e fumè.
- **Aggiornamento Stili**: Aggiornati tutti i file CSS del progetto (`bio.css`, `portfolio.css`, ecc.) per supportare il nuovo tema scuro.

### 09:55 (01/07/2026)
- **Fix Robustezza JavaScript**: Risolto un problema che causava il blocco del sito (sfondo nero e icone non cliccabili) in caso di mancato caricamento di alcuni elementi o problemi di cache del browser.
- **Error Handling**: Aggiunti controlli di esistenza per il tasto Dark Mode e per la libreria Lucide Icons, garantendo che il resto del sito continui a funzionare anche se un singolo componente fallisce.
- **Sincronizzazione Iframe**: Migliorata la logica di sincronizzazione del tema negli iframe per evitare errori di riferimento variabili.
- **Git**: Effettuato il push immediato per ripristinare la funzionalità del sito online.

### 10:05 (01/07/2026)
- **Aggiornamento Icone Tema**: Invertite le icone del selettore tema per una migliore chiarezza visiva. Ora il Sole rappresenta la modalità chiara e la Luna rappresenta la modalità scura.

### 10:20 (01/07/2026)
- **Aggiunta Copyright Bar**: Inserita una barra dei crediti e copyright alla base del desktop.
- **Integrazione Nicolò Conti**: La barra riporta il testo "© 2026 Nicolò Conti - Tutti i diritti riservati".
- **Design Discreto**: Utilizzato un font ridotto e una trasparenza elevata per rendere la barra leggibile ma non invasiva, posizionandola in fondo allo schermo.
- **Layout Mobile**: Su dispositivi mobile, la barra si sposta automaticamente sopra la barra di navigazione per rimanere visibile senza interferire con i tasti di sistema.

### 10:30 (01/07/2026)
- **Restyling Copyright Bar**: Trasformata la barra in un rettangolo "glassmorphism" con sfondo semitrasparente e bordi arrotondati.
- **Visibilità**: Testo impostato su bianco puro (`#ffffff`) per una leggibilità ottimale su ogni sfondo.
- **Layout Mobile Avanzato**: Spostata la barra dei copyright all'estremo fondo dello schermo su mobile, alzando proporzionalmente la barra di navigazione e tutte le finestre/overlay per garantire che nulla si sovrapponga.

### 10:40 (01/07/2026)
- **Riprogettazione Bottom Bar**: Creata una barra di sistema inferiore (`.bottom-system-bar`) a tutta larghezza, coerente con la Top Bar superiore.
- **Unificazione Mobile**: Su mobile, la barra inferiore ospita ora sia i tasti di navigazione (Recenti, Home, Indietro) che la dicitura di copyright, riducendo il numero di elementi sovrapposti.
- **Design PC**: Su desktop, la barra inferiore è una sottile striscia semitrasparente (30px) che attraversa tutto lo schermo da sinistra a destra, contenendo il copyright centrato.
- **Ottimizzazione Z-Index**: Rinforzata la gerarchia dei livelli per garantire che la barra inferiore rimanga sempre sopra i contenuti ma sotto le finestre attive.
- **Posizionamento Dock**: Alzato il Dock su PC a `bottom: 45px` per evitare che si sovrapponga alla nuova barra di sistema inferiore.
