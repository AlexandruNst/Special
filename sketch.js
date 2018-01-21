/*
La multi ani, Dragos!

Cu cel mai mare drag, prietenul tau, Alex.
22.01.2018
*/


// Variabila pentru imagine
let img;

// Interatorul pixelilor
let i = 0;

// Diametrul cerculetelor
let d = 10;

function preload() {
    /* Poti sa adaugi ce poza vrei.
        Trebuie doar sa aiba fundal alb.
        Ce nu e alb va aparea ca cerculete.
    */

    // Pentru "La multi ani, Dragos!"
    img = loadImage("assets/Lma.png");

    // Pentru "puritate imperfecta"
    // img = loadImage("assets/puritate_imperfecta.png");

    // Pentru "pur-imp"
    // img = loadImage("assets/pur-imp.png");
}

function setup() {
    // Fundalul are marimile pozei
    createCanvas(img.width, img.height);

    // Schimba cat de inchis sa udeschis e fundalul. De la 0 (negru) la 255 (alb).
    background(20);
}

function draw() {

    // Culoarea marginii cerculetelor
    stroke(0);

    // Grosimea conturului cerculetelor
    strokeWeight(2);

    // Tip culoare: Hue/Saturation/Brightness
    colorMode(HSB, 255);

    // Creaza vectorul de pixeli
    img.loadPixels();

    // Coordonatele cerculetelor
    var dotx = i % img.width;
    var doty = i / img.width;

    // Pentru a avea gradient ROGVAIV pe toata lungimea scrisului
    var col = map(dotx, 0, img.width, 0, 255);

    // Daca pixelul nu e alb
    if (img.pixels[i * 4] != 255) {
        // Se seteaza culoarea
        fill(col, 255, 255);
        /*
            Parametrii:
            fill(HUE, SATURATION, BRIGHTNESS)
        */

        // Se deseneaza cerculetul
        ellipse(dotx, doty, d, d);
        /*
            Parametrii:
            ellipse(COORDONATA X, COORDONATA Y, LUNGIME, LATIME)
            Obs: pentru cerc, LUNGIME = LATIME = d
        */
    }

    // Ca sa nu ia literalmente fiecare pixel pe orizontala, ci din d in d, unde d e diametrul unui cerculet
    i += d;

    // Ca sa sara d pixeli si vertical
    if (i % img.width < d) {
        i += d * img.width;
    }
}