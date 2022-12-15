// 1. Faça uma função que retorna a contagem de caracteres, sejam letras ou números
// que se repetem mais de uma vez na string recebida como parâmetro.
// Ex.:
// Entrada: “abcde”      Saída: 0
// Entrada: “aabcde333”  Saída: 2
function RetornarContagemCaracteres(palavra) {
    var palavraMinuscula = palavra.toLocaleLowerCase();
    var semEspaco = palavraMinuscula.replace(" ", "");
    var indexPalavra = semEspaco.split("");
    var contagem = 0;
    var arraySup = [];
    for (var index = 0; index < indexPalavra.length; index++) {
        for (var index2 = 0; index2 < indexPalavra.length; index2++) {
            if (indexPalavra[index] == indexPalavra[index2] && index != index2) {
                if (arraySup.includes(indexPalavra[index]) == false) {
                    arraySup.push(indexPalavra[index]);
                    contagem++;
                }
            }
        }
    }
    return contagem;
}
// 2. Implemente uma função que recebe um array de string contendo nomes. A função
// deve retornar um texto de exibição conforme os exemplos.
// Ex.:
//Entrada: [] Saída: “ninguém gostou disso”
//Entrada: [“Luiz”] Saída: “Luiz gostou disso”
//Entrada: [“Giovanni”, “Fulano”] Saída: “Giovanni e Fulano gostaram disso”
//Entrada: [“Giovanni”, “Fulano”, “Ciclano”] Saída: “Giovanni, Fulano e Ciclano gostaram disso”
//Entrada: [“Luiz”, “Giovanni”, “Fulano”, “Ciclano”] Saída: “Luiz, Giovanni e outros dois gostaram disso”
function RetornarTexto(nomes) {
    if (nomes === void 0) { nomes = []; }
    var complemento;
    var retorno;
    if (nomes.length == 0) {
        complemento = "Ninguém";
        retorno = complemento + " gostou disso";
        return retorno;
    }
    else if (nomes.length == 1) {
        complemento = nomes[0];
        retorno = complemento + " gostou disso";
        return retorno;
    }
    else if (nomes.length == 2) {
        complemento = nomes[0] + " e " + nomes[1];
        retorno = complemento + " gostaram disso";
        return retorno;
    }
    else if (nomes.length == 3) {
        complemento = nomes[0] + ", " + nomes[1] + " e " + nomes[2];
        retorno = complemento + " gostaram disso";
        return retorno;
    }
    else {
        complemento = nomes[0] + ", " + nomes[1] + ", " + nomes[2] + " e " + nomes[3];
        retorno = complemento + " gostaram disso";
        return retorno;
    }
}
// 3. Escreva uma função camelCase para strings. Todas as palavras devem ter a
// primeira letra maiúsculas e sem espaços.
// Entrada: “ola mundo”  Saída: “OlaMundo”
// Entrada: “frase camel case” Saída: “FraseCamelCase”
function CamelCase(palavras) {
    var minuscula = palavras.toLowerCase();
    var IndexPalavra = minuscula.split(" ");
    var concatenar = ("");
    for (var index = 0; index < IndexPalavra.length; index++) {
        var letra = IndexPalavra[index].split("");
        var juntar = letra.join("");
        var letraMaiuscula = juntar[0].toUpperCase();
        var reforma = juntar.replace(juntar[0], letraMaiuscula);
        concatenar = concatenar + reforma;
    }
    console.log(concatenar);
}
