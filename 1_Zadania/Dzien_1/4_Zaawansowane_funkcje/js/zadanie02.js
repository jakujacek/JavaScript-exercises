  /**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//Kompilator deklaruje funkcję sortArray
function sortArray() {

    //Deklaruje lokalną tablicę
    var points = [41, 3, 6, 1, 114, 54, 64];

    //Deklaracja funkcji wyższego rzędu która sortuje
    // tablicę points
    points.sort(function(a, b){
        //Funkcja zwraca posortowaną tablicę
        // od najniższej do najwyższej liczby
        return a-b;
    });

    //Funkcja sortArray zwraca posortowaną tablicę
    return points;
}

//Wywołuje w kodzie (nie wyświetli się ona w console.log)funkcję sortArray
sortArray();
