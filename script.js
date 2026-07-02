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
// ======================================================
// SYMBO CONVERTER V1.0
// PART 2
// ======================================================

// =====================================
// Render English Text
// =====================================

function renderEnglish(text){

    outputArea.innerHTML="";

    hiddenOutput=text;

    outputArea.textContent=text;

}

// =====================================
// Decode Hidden Text
// =====================================

function decodeHidden(text){

    let result="";

    for(let ch of text){

        if(reverseDigitMap[ch]){

            result+=reverseDigitMap[ch];

        }

        else{

            result+=ch;

        }

    }

    return result;

}

// =====================================
// Convert Button
// =====================================

convertBtn.addEventListener("click",function(){

    let input=inputBox.value.trim();

    if(input===""){

        alert("Please enter some text.");

        inputBox.focus();

        return;

    }

    // English → Symbo

    if(isEnglishInput(input)){

        renderSymbo(input);

    }

    // Symbo → English

    else{

        renderEnglish(decodeHidden(input));

    }

});
// ======================================================
// SYMBO CONVERTER V1.0
// PART 3
// ======================================================

// =====================================
// Copy Button
// =====================================

copyBtn.addEventListener("click", async function(){

    if(hiddenOutput.trim()===""){

        alert("Nothing to copy.");

        return;

    }

    try{

        await navigator.clipboard.writeText(hiddenOutput);

        alert("Copied Successfully!");

    }

    catch(err){

        const temp=document.createElement("textarea");

        temp.value=hiddenOutput;

        document.body.appendChild(temp);

        temp.select();

        document.execCommand("copy");

        document.body.removeChild(temp);

        alert("Copied Successfully!");

    }

});

// =====================================
// Clear Button
// =====================================

clearBtn.addEventListener("click",function(){

    inputBox.value="";

    outputArea.innerHTML="Converted output will appear here...";

    hiddenOutput="";

    inputBox.focus();

});

// =====================================
// Initial Screen
// =====================================

outputArea.innerHTML="Converted output will appear here...";
