// 'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const changeUser = function () {
  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;
  
  const userKeysArray = Object.keys(user);
  // Object.keys(obj) - это преобразование обьекта в массив где элементами массива становятся каждое отдельное имя свойства (ключ)

  for (const key of userKeysArray) {
    return `${key}: ${user[key]}`;
  }
}

console.log(changeUser());