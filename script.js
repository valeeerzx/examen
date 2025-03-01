function contarPalabras(frase) {
    let palabras = frase.split(" ").filter(palabra => palabra.length > 0);
    return palabras.length;
}

function contarPalabrasEnFrase() {
    let frase = document.getElementById("inputText").value;
    let numeroDePalabras = contarPalabras(frase); 


    let resultadoDiv = document.getElementById("resultado");
    resultadoDiv.textContent = "La frase tiene " + numeroDePalabras + " palabra(s).";
}
