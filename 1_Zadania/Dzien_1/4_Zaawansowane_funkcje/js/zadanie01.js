/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//Kompilator znajduje deklarację funkcji
function jeden() {

    //Deklarujemy zmienną lokalną zmienna1 i pzypisujemy jej
    // wartość = 1
    var zmienna1 = 1;

    //Deklaracja funkcji wyższego rzędu
    function dwa() {

        //Wypisujemy w konsoli wartość zmienn1
        console.log(zmienna1);

        //Deklarujemy nową zmienną llokalną i
        // przypisuujemy jej wartość 3
        var zmienna2 = 3;
    }

    //Wywołujemy funkcję wyższego rzędu
    dwa();

    //Próba wywołania wartości zmienna2 nie powiedzie się
    // ponieważ jest ona zadeklarowana w ciele funkcji
    // wyższego rzędu. Po wykonaniu instrukcji znajdującej się w funkcji "dwa"
    // kompilator usuwa wszystkie informacje: również deklaracje zmiennych
    console.log(zmienna2)
}

//Wywołujemy funkcję jeden
jeden()
