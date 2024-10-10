//1. node.js установлен
//2. typescript установлен
//3. файл typescript создан и открыт в редакторе
//4. Создание переменных с типом boolean
    let isA: boolean = false;
    let isB: boolean = true;
//5. Изменение значения переменной
    isA = "yes"; //Не удалось изменить значение переменной isA на строку
    isB = false; //Удалось изменить значение переменной isB
    //Переменные типа boolean могут хранить только логические значения (true и false)
    
//6. Создание переменных с типом number
    let age: number = 36;
    let height: number = 178;    
//7. Изменение значения переменной
    age = "fourty"; //Не удалось изменить значение переменной age на строку
    height = 176; //Переменные типа number могут хранить только числовые значения
    
//8. Создание переменных с типом string
    let firstName: string = "John";
    let lastName: string = "Travolta";
//9. Изменение значения переменной
    // Попробуем изменить значение переменной firstName на число
    firstName = 123; //Не удалось изменить значение переменной на число
    lastName = "Trivolta" //Переменные типа string могут хранить только строковые значения
    
//10. Создание переменных с типом null и undefined
    let forNull: null = null;
    let forUndefined: undefined = undefined;
//11. Изменение на любое другое значение
    forNull = "test"; //Не удалось изменить значение переменной forNull, так как она может хранить только значение null
    forUndefined = undefined //Переменная forUndefined также не может быть изменена на другое значение, кроме как undefined
    
//12. Создание функций с типом void
    function logMessage(message: string): void {
        console.log(message);
    }

    function doNothing(): void {
        // ничего не делает
    }
    
//13. Использование функции без ключевого слова return
    function noReturn(): void {
        console.log("This function has no return"); //Ошибки нет!
    }

    // Добавляем return
    function returnWithValue(): void {
        return "This will cause an error"; //Ошибка!
    }
    //При использовании функции без ключевого слова return ошибок не возникает, так как она просто выполняет действие
    //Если мы добавим return с возвращаемым значением, которое не соответствует типу void, возникнет ошибка
    //Это происходит потому, что функции, возвращающие void, не должны возвращать никакого значения