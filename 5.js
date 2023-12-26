// Задача 1
function task1() {
  var user = {};
  user.name = "John";
  user.surname = "Smith";
  user.name = "Pete";
  delete user.name;  
  alert(user.surname);
}

// Задача 2
function task2() {
  function isEmpty(obj) {
    if (Object.keys(obj).length)
        return true;

    return false;
  }

  let schedule = {};
  alert( isEmpty(schedule) );  // true
  schedule["8:30"] = "get up";
  alert( isEmpty(schedule) ); // false
}



// Задача 3
function task3() {
  const user2 = {
      name: "John"
  };
  alert(user2.name);
  user2.name = "Pete"; 
  alert(user2.name);
}

// Задача 4
function task4() {
  const salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

  var sum = 0;
  for (const i in salaries) {
      sum += +salaries[i];
  }
  alert(sum);
}

// Задача 5
function task5() {
  let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };  
  function multiplyNumeric(menu) {
      for (const x in menu) {
          if (!isNaN(menu[x]))
              menu[x] *= 2;
      }
  }
  multiplyNumeric(menu);
  alert("width: " + menu.width + "\n" + "height: " + menu.height + "\n" + "title: " + menu.title);  
}

// Задача 6
function task6() {
  let fruits = ["Яблоки", "Груша", "Апельсин"];

  let shoppingCart = fruits;
  shoppingCart.push("Банан");

  alert(fruits.length); // 4
}

// Задача 7
function task7() {
  let styles = ['Джаз', 'Блюз'];
  styles.push('Рок-н-ролл');
  styles[Math.floor(styles.length / 2)] = 'Классика';
  alert(styles.shift());
  styles.unshift('Рэп', 'Регги');
  alert(styles);
}

// Задача 8
function task8() {
  var arr = ["a", "b"];
  arr.push(function () {
      alert(this);
  })
  alert(arr[2]()); // undefined
}

// Задача 9
function task9() {
  let array = [];

  while(true)
  {
      var input = prompt("Введите число");
      if (input == null || input == isNaN(input))
          break;
      else
          array.push(parseInt(input));
  }

  let sum = 0;
  for (let i = 0; i < array.length; i++)
      sum += array[i];

  alert(sum);
}

// Задача 10
function task10() {
  var arr = [1, -2, 3, 4, -9, 6];
  alert("Исходный массив: " + arr);
  function getMaxSubSum(arr) {
      let newSum = 0, maxSum = 0;
      for (let i = 0; i < arr.length; i++) {
          newSum += arr[i];
          if (arr[i] > newSum) newSum = arr[i];
          if (newSum > maxSum) maxSum = newSum;
      }
      return maxSum;
    }
    alert(getMaxSubSum(arr));
}

// Задача 11
function task11() {
  const array = [1, 1, 2, 3 ,4 ,5, 6, 6, 7 ,6 ,8, 6, 8]; 
  const result = [];
  alert("Исходный массив: " + array);
  for (let i = 0; i < array.length; i++)
  {
      let count = 0;
      if (result.indexOf(array[i]) != -1) continue;

      for(let j = 0; j < array.length; j++)
      {
          if (array[i] == array[j])
              {
                  count++;
                  if (count > 2)
                  {
                      result.push(array[i]);
                      break;
                  }
              }
      }
  }

  for(let i = 0; i < result.length; i++)
  {
      for(let j = 0; j < array.length; j++)
      {
          if(array[j] == result[i])
          {
             array.splice(j, 1);
             j--;
          }
      }
  }


  alert("Новый массив: " + array);
}

// Задача 12
function task12() {
  function Left3Right1FromMax(arr) {
    let max = arr[0], idx = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
            idx = i;
        }
    }

    // Сдвиг 3 влево
    for (let i = 0; i < 3; i++) {
        if (idx === arr.length - 1) break;
        let temp = arr[idx + 1];
        arr.splice(idx + 1, 1);
        arr.splice(idx, 0, temp);
        idx++;
    }

    let temp = arr[idx - 1];
    arr.splice(idx - 1, 1);
    arr.splice(idx, 0, temp);
}

var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
alert("Исходный массив: " + arr);
Left3Right1FromMax(arr);
alert("Новый массив: " + arr);

}

// Задача 13
function task13() {
  const arr = [-1, 2, 3, -3 , 4, -4, -10, -3]; // -21
  let sum = 0;
  for(let i = 0; i < arr.length; i++)
  {
      if (arr[i] < 0) sum += arr[i];
  }
  alert(sum);
}

// Задача 14
function task14() {
  const arr = [1, 5, 3, 6, 5, 6, 2]; 
  let res = 1;
  for (let i = 0; i < arr.length; i++)
  {
      if(i % 2 == 1) res *= arr[i];
  }
  alert(res);
}

// Задача 15
function task15() {
  const arr = [1, 2, 0, 5, 5, 5, 5, 0, 1, 2, 3]; // 20
  let res = 0;  
  if(arr.indexOf(0) == - 1) {
      alert(0);
      return;
  }
  for(let i = arr.indexOf(0) + 1; i < arr.length; i++)
  {
      res += arr[i];
      if(arr[i] == 0)
      {
          alert(res);
          return;
      }
  }
  alert(0);
}

// Задача 16
function task16() {
  var arr = [5, 6, 7, 1, 2, 9, 11];
  alert(arr);
  alert(Math.max.apply(null, arr));
}

// Задача 17
function task17() {
  function minOdd(arr) {
    let min = arr[0];

    for (const elem of arr) {
        if (elem < min && elem % 2 == 0)
            min = elem;
    }

    return min;
  }
  var arr = [10, 8, 5, 6, 2, 9, 11];
  alert(arr);
  alert(minOdd(arr));
}

// Задача 18
function task18() {
  function StartsWithZeros(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 0)
            arr.unshift(arr.splice(i--, 1)[0]);
    }
  }
  var arr = [0, 1, 2, 3, 0, 4, 5, 0, 6, 7, 0, 8, 0, 0, 0, 9];
  alert(arr);
  StartsWithZeros(arr);
  alert(arr);
}

// Задача 19
function task19() {
  let arr = [1, 6, 8, 4, 5, 0, 4, 7, 3, 1];
  let min = 0;
  let max = 0;
  for(let i = 0; i < arr.length; i++)
  {
      if (arr[max] < arr[i]) max = i;
      if (arr[min] > arr[i]) min = i;
  }
  alert(arr);
  alert(max + min);
}

// Задача 20
function task20() {
  let arr = [12, -3, 4, -1, 6, 8, 19]; 
  let min = arr[0];
  for(let i = 0; i < arr.length; i++)
  {
      if(Math.abs(min) > Math.abs(arr[i])) min = arr[i];
  }
  alert(arr);
  alert(min);
}

// Задача 21
function task21() {
  let arr = [];
  for(let i = 0; i < 10; i++)
      arr.push(Math.floor(Math.random() * 10 - Math.random() * 10));

  let arr1 = arr.slice(0, 5).reverse();
  let arr2 = arr.slice(5, 10).reverse();
  alert(arr);
  alert(arr1.concat(arr2));
}

// Задача 22
function task22() {
  let arr = [];
  for(let i = 0; i < 12; i++)
      arr.push(Math.floor(Math.random() * 12 - Math.random() * 12));
  
  alert(arr);
  for(let i = 0; i < 4; i++) arr.unshift(arr.pop());
  alert(arr);
}


// Задача 23
function task23() {

  async function getGenderByAPI() {
    const name = prompt('Введите имя:');

    try {
      const response = await fetch(`https://api.genderize.io?name=${name}`);
      const data = await response.json();

      alert(`Имя: ${data.name} \nГендер: ${data.gender} \nВероятность: ${data.probability*100}% \nКоличество: ${data.count}`);
    } catch (error) {
      console.error('Произошла ошибка при запросе к API:', error.message);
    }
  }

  getGenderByAPI();

}