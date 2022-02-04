let binary_search = function (list, item) {
    let low = 0;
    let high = list.length - 1;
    let mid = 0;
    let guess = 0;
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
            return  "Массив для поиска: "+ list + ". Искомое значение: " + guess +  ". Искомый индекс: " + mid ;
            // console.log("guess:" + guess + " = mid: " + mid);
        }
        if (guess > item){
            high = mid -1;
        } else {
            low = mid + 1;
        }

    }
    return "Массив для поиска: "+ list + ". Искомое значение: " + item +  ". Значение в массиве не найдено.";



};

// console.log ("123");
let my_list_1 = [1,3,5,7,9,11,12,14,15,23,43,99];

