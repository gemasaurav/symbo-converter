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
