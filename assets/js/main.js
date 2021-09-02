/**********************************************************************************************
JS Vertiefung CodeFlow Übung lev1_1: Events Intro - Aufgabenstellung

In dieser Übung werden wir JS Events kennenlernen.
Schreibe eine Funktion, die beim Anklicken des Buttons einen Alert anzeigt.
*/
document.getElementById('alert').addEventListener('click', () => {
    alert('Sie haben gerufen?');
});


/**********************************************************************************************
JS Vertiefung CodeFlow Übung lev1_2: Events Datum - Aufgabenstellung

In dieser Übung werden wir uns weiter mit JS Events beschäftigen.
Schreibe eine Funktion, die beim Anklicken des Buttons das aktuelle Datum im HTML-Dokument anzeigt.
Der HTML Code befindet sich im Kommentarbereich.
*/
function datum() {
    document.getElementById('datum').textContent = new Date().toDateString();
}


/**********************************************************************************************
JS Vertiefung CodeFlow Übung lev1_3: events - Aufgabenstellung

In dieser Übung werden wir uns weiter mit JS Events beschäftigen.
Schreibe eine Funktion, die beim Anklicken der Boxen die Farbe der angeklickten Box ändert.
Der HTML Code befindet sich im Kommentarbereich.
*/
document.querySelectorAll(".card").forEach(div => {
    div.addEventListener('click', function (e) {
        let selected = document.querySelector(
            `#lev1_3 div:nth-of-type(${e.target.textContent})`);

        selected.style.background = `rgb(
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)},
            ${Math.floor(Math.random() * 256)})`;
    });
});


/**********************************************************************************************
JS Vertiefung CodeFlow Übung lev1_4: Events addEventListener - Aufgabenstellung

In dieser Übung werden wir addEventListener() kennenlernen.
Schreibe eine Funktion, die beim Anklicken des Paragraphen eine Nachricht in der Konsole ausgibt.
Nutze die Befehle:
*/
document.getElementById('eventParagraph').addEventListener('click', () => {
    document.getElementById('eventText').textContent =
        'Du hast auf den Event-Paragraphen geklickt.';
});


/**********************************************************************************************
JS Vertiefung CodeFlow Übung lev1_5: Events counter getElementById - Aufgabenstellung

In dieser Übung werden wir uns weiter mit JS Events beschäftigen.
Schreibe eine Funktion, die einen Klickzähler hochzählt, wenn du auf einen Button klickst.
Der HTML und CSS Code befindet sich im Kommentarbereich.
*/
let count = 0;
let clickMe = document.getElementById('clickMe');
clickMe.addEventListener('click', () => {
    clickMe.textContent = `Click me: ${++count}`;
});


/**********************************************************************************************
JS Vertiefung CodeFlow Übung lev1_6: Events addEventListener("change") - Aufgabenstellung

In dieser Übung werden wir den Eventhandler change kennenlernen.
Der Eventhandler change wird bei einer erfolgten Änderung ausgelöst. Diese Wertänderung wird im Normalfall in einem Formularelement stattfinden.
Schreibe eine Funktion, die im Paragraph den Text anpasst, nachdem du ein Element aus der Liste ausgewählt hast.
*/
let mySelect = document.getElementById('my-select');
mySelect.addEventListener('change', (e) => {

    mySelect.querySelectorAll("option").forEach(opt => {
        let content = opt.textContent;
        let selText = "✓ ";

        if (content.includes(selText))
            content = content.replace(selText, "");

        if (opt.selected)
            content = selText + content;

        opt.textContent = content;
    });
});