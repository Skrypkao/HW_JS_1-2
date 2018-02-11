
var namesList = [];
    for (var i = 0; i < 5; i++) {
    namesList.push(prompt('Введите имя', ));
}
    var name = prompt('Введите свое имя');

  if (namesList.indexOf(name) > -1)
     { alert('Добро пожаловать!');
  }
  else {
    alert('Ошибка!');
  }
