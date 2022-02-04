let binary_search = function (list, item) {
    let low = 0; //индекс наименьшего элемента массива
    let high = list.length - 1; //индекс наибольшего элемента массива (%длина массива% -1)
    let mid; //переменная для хранения индекса среднего элемента в массиве
    let guess; //переменная для хранения полученного значения из элемента массива, которую будем срванивать с искомым значением

    while (low <= high){
        // выводим индекс первого и последнего элементов массива
        // console.log("low = " + low + ", high = " + high);

        // находим середину массива и записываем в mid. индекс первого элемента складываем с индексом последнего
        // элемента и делим на 2 c округлением в меньшую стону до целого
        mid = Math.floor((low + high) / 2) ;
        // console.log("mid = " + mid);

        // назначаем guess значение среднего элемента массива
        guess = list[mid];
        // console.log("guess = " + guess);


        // проверяем равно ли среднее MID искомому значению ITEM
        if (guess == item) {
            document.write("Массив для поиска: "+ list + ". Искомое значение: " + guess +  ". Искомый индекс: " + mid + "<br>");
            return  "Массив для поиска: "+ list + ". Искомое значение: " + guess +  ". Искомый индекс: " + mid ;
            // console.log("guess:" + guess + " = mid: " + mid);
        }
        if (guess > item){
            high = mid -1;
        } else {
            low = mid + 1;
        }

    }
    document.write("Массив для поиска: "+ list + ". Искомое значение: " + item +  ". Значение в массиве не найдено.<br>");
    return "Массив для поиска: "+ list + ". Искомое значение: " + item +  ". Значение в массиве не найдено.";




};

// console.log ("123");
let my_list_1 = [1,3,5,7,9,11,12,14,15,23,43,99];

binary_search (my_list_1, -1);
binary_search (my_list_1, 2);
binary_search (my_list_1, 5);
binary_search (my_list_1, 12);