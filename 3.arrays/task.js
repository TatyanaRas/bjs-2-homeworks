
//Задача 1 сравнить массивы
function compareArrays(arr1, arr2) {
   
  return  arr1.length === arr2.length && arr1.every((values, index) => values === arr2[index]);
   } 
   
//Задача 2 фильтрация и преобразование массива
function getUsersNamesInAgeRange(users, gender) {

    let result = users.filter(values => values.gender === gender).map(values => values.age).reduce((acc, values, index, arr)=> 
    {acc+=values;
        if (index === arr.length - 1) {
            return acc / arr.length;
        }
return acc;
}, 0);
return result;
}

