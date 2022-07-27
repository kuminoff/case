const links = document.querySelectorAll('.menu-list__link') //находим все элементы с данным классом

links.forEach(link =>{ //перебираем элементы
  link.addEventListener('click', (event) => { //по каждому клику по элементу
    event.preventDefault() //останавливаем стандартное поведение по клину на элемент

    const id = link.getAttribute('href').substring(1) //получаем идентификатор кликнутого элемента и удаляем первую букву и него
    const section = document.getElementById(id) //ещем секцию по ее идентификатору

    if (section){ // если секция существует
      seamless.scrollIntoView(section, {
        behavior: "smooth", //каким образом
        block: "center", //где окажимся после нажатия
        inline: "center",
    });
    }
  })
})
