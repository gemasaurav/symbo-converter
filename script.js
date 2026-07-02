function convertText() {

    const input = document
        .getElementById("inputText")
        .value
        .toUpperCase();

    let output = "";

    for(let i=0;i<input.length;i++){

        let ch = input[i];

        if(symbolMap[ch]){

            output +=
            `<img src="${symbolMap[ch]}" class="symbol">`;

        }
        else if(ch===" "){

            output += "&nbsp;&nbsp;&nbsp;&nbsp;";

        }
        else{

            output += ch;

        }

    }

    document.getElementById("output").innerHTML = output;

}

function clearText(){

    document.getElementById("inputText").value="";

    document.getElementById("output").innerHTML="";

}
// ======================================================
// SYMBO CONVERTER V1.0
// PART 1
// ======================================================

const inputBox = document.getElementById("inputText");
const outputArea = document.getElementById("outputText");
const convertBtn = document.getElementById("convertBtn");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");

// Stores hidden encoded text
let hiddenOutput = "";

// ======================================================
// Detect Input Type
// ======================================================

function isEnglishInput(text){

    return /[A-Za-z]/.test(text);

}

// ======================================================
// Render Symbo Images
// ======================================================

function renderSymbo(text){

    outputArea.innerHTML = "";

    hiddenOutput = "";

    for(let ch of text){

        let upper = ch.toUpperCase();

        // Letters
        if(symboMap[upper]){

            const img = document.createElement("img");

            img.src = symboMap[upper];

            img.alt = upper;

            img.dataset.letter = upper;

            outputArea.appendChild(img);

            hiddenOutput += upper;

        }

        // Digits
        else if(digitMap[ch]){

            const span = document.createElement("span");

            span.textContent = digitMap[ch];

            span.dataset.letter = ch;

            outputArea.appendChild(span);

            hiddenOutput += ch;

        }

        // Space
        else if(ch===" "){

            const space=document.createElement("span");

            space.innerHTML="&nbsp;&nbsp;&nbsp;";

            outputArea.appendChild(space);

            hiddenOutput+=" ";

        }

        else{

            const span=document.createElement("span");

            span.textContent=ch;

            outputArea.appendChild(span);

            hiddenOutput+=ch;

        }

    }

}
